// calendar.js — TRYKA 800 Calendar Integration Module
// Provides ICS generation and external calendar URL builders.
// Loaded as a plain <script> before app.js — exposes the global TrykaCalendar object.

const TrykaCalendar = (() => {

    // ─── ICS Formatting Helpers ──────────────────────────────────────────────

    function _pad(n) { return String(n).padStart(2, '0'); }

    // Format a local Date as ICS YYYYMMDDTHHMMSS (used with TZID=Europe/Dublin)
    function _fmtLocal(d) {
        return `${d.getFullYear()}${_pad(d.getMonth() + 1)}${_pad(d.getDate())}` +
               `T${_pad(d.getHours())}${_pad(d.getMinutes())}${_pad(d.getSeconds())}`;
    }

    // Format a Date as UTC ICS stamp YYYYMMDDTHHMMSSZ (used for DTSTAMP)
    function _fmtUtc(d) {
        return `${d.getUTCFullYear()}${_pad(d.getUTCMonth() + 1)}${_pad(d.getUTCDate())}` +
               `T${_pad(d.getUTCHours())}${_pad(d.getUTCMinutes())}${_pad(d.getUTCSeconds())}Z`;
    }

    // Escape special characters per RFC 5545
    function _esc(str) {
        return String(str)
            .replace(/\\/g, '\\\\')
            .replace(/;/g, '\\;')
            .replace(/,/g, '\\,')
            .replace(/\n/g, '\\n');
    }

    // ─── ICS Event Builder ────────────────────────────────────────────────────

    /**
     * Build a single VEVENT string.
     * @param {object} p
     * @param {string}  p.uid         - deterministic UID (e.g. "w3-vitor-1")
     * @param {string}  p.summary     - event title
     * @param {string}  p.description - event body text
     * @param {string}  [p.location]  - optional location
     * @param {Date}    p.dtstart     - start time (local Dublin time)
     * @param {Date}    p.dtend       - end time   (local Dublin time)
     */
    function buildIcsEvent({ uid, summary, description, location, dtstart, dtend }) {
        const lines = [
            'BEGIN:VEVENT',
            `UID:${uid}@tryka800`,
            `DTSTAMP:${_fmtUtc(new Date())}`,
            `DTSTART;TZID=Europe/Dublin:${_fmtLocal(dtstart)}`,
            `DTEND;TZID=Europe/Dublin:${_fmtLocal(dtend)}`,
            `SUMMARY:${_esc(summary)}`,
            `DESCRIPTION:${_esc(description)}`,
            `LOCATION:${_esc(location || 'Gym / Track')}`,
            'BEGIN:VALARM',
            'TRIGGER:-PT1H',
            'ACTION:DISPLAY',
            `DESCRIPTION:Reminder: ${_esc(summary)}`,
            'END:VALARM',
            'END:VEVENT',
        ];
        return lines.join('\r\n');
    }

    // ─── ICS Calendar Envelope ────────────────────────────────────────────────

    /**
     * Wrap an array of VEVENT strings in a VCALENDAR envelope.
     * @param {string[]} events - array of VEVENT strings from buildIcsEvent()
     */
    function buildIcsCalendar(events) {
        return [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//TRYKA 800//Training Plan//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'X-WR-CALNAME:TRYKA 800',
            'X-WR-TIMEZONE:Europe/Dublin',
            events.join('\r\n'),
            'END:VCALENDAR',
        ].join('\r\n');
    }

    // ─── Download Helper ──────────────────────────────────────────────────────

    /**
     * Trigger a browser download of a .ics file.
     * On mobile, this opens the native calendar import dialog automatically.
     * @param {string} content  - full ICS text
     * @param {string} filename - desired filename (e.g. "tryka800-w3-vitor.ics")
     */
    function downloadIcs(content, filename) {
        const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    }

    // ─── External Calendar URL Builders ──────────────────────────────────────

    // Format a Date to the compact UTC stamp Google Calendar expects: YYYYMMDDTHHMMSSz
    function _fmtGoogle(d) {
        return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    }

    /**
     * Build a pre-filled Google Calendar "add event" URL for a single event.
     */
    function buildGoogleCalendarUrl({ summary, dtstart, dtend, description, location }) {
        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: summary,
            dates: `${_fmtGoogle(dtstart)}/${_fmtGoogle(dtend)}`,
            details: description,
            location: location || 'Gym / Track',
        });
        return `https://calendar.google.com/calendar/render?${params.toString()}`;
    }

    /**
     * Build a pre-filled Outlook Web "add event" deep-link URL for a single event.
     */
    function buildOutlookUrl({ summary, dtstart, dtend, description, location }) {
        const params = new URLSearchParams({
            path: '/calendar/action/compose',
            rru: 'addevent',
            subject: summary,
            startdt: dtstart.toISOString(),
            enddt: dtend.toISOString(),
            body: description,
            location: location || 'Gym / Track',
        });
        return `https://outlook.office.com/calendar/0/deeplink/compose?${params.toString()}`;
    }

    // ─── Public API ───────────────────────────────────────────────────────────

    return {
        buildIcsEvent,
        buildIcsCalendar,
        downloadIcs,
        buildGoogleCalendarUrl,
        buildOutlookUrl,
    };

})();
