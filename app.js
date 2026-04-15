document.addEventListener('DOMContentLoaded', () => {
    // --- Countdown Timer ---
    const targetDate = new Date('July 4, 2026 09:00:00').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const gap = targetDate - now;

        if (gap < 0) {
            daysEl.innerText = '00';
            hoursEl.innerText = '00';
            minutesEl.innerText = '00';
            secondsEl.innerText = '00';
            return;
        }

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const d = Math.floor(gap / day);
        const h = Math.floor((gap % day) / hour);
        const m = Math.floor((gap % hour) / minute);
        const s = Math.floor((gap % minute) / second);

        daysEl.innerText = d.toString().padStart(2, '0');
        hoursEl.innerText = h.toString().padStart(2, '0');
        minutesEl.innerText = m.toString().padStart(2, '0');
        secondsEl.innerText = s.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // --- Training Dashboard Data ---
    const trainingData = {
        phases: [
            { name: "PHASE 1: FOUNDATION", weeks: [1, 2, 3, 4], focus: "Build running base, introduce all movements with correct technique." },
            { name: "PHASE 2: BUILD", weeks: [5, 6, 7, 8], focus: "Increase running volume, raise station intensity, introduce combos." },
            { name: "PHASE 3: RACE-SPECIFIC", weeks: [9, 10], focus: "Race simulation, pacing practice, back-to-back run + station efforts." },
            { name: "PHASE 4: TAPER", weeks: [11], focus: "Cut volume ~50%, keep movement sharp, arrive fresh." }
        ],
        weeks: {
            1: {
                vitor: [
                    { type: 'r', title: 'Interval Run', details: '3 × 800m @ easy conversational pace. Rest 3 min between. Goal: find a pace you could repeat 8 times.' },
                    { type: 's', title: 'Stations Tech', details: 'SkiErg 3 × 250m (technique only). Sled Push 3 × 25m light. Walking Lunges 3 × 25m bodyweight.' },
                    { type: 'j', title: 'Joint Session 1', details: 'Get Acquainted: Easy 2 × 800m jog together. Walk through stations with zero load.' }
                ],
                darragh: [
                    { type: 'r', title: 'Walk-Run', details: '6 × (1 min jog / 2 min walk). ~18 min total. Flat surface. Knee check afterwards.' },
                    { type: 's', title: 'SkiErg Tech', details: 'SkiErg technique: 5 × 100m focus on hip hinge. Rower 3 × 250m easy.' },
                    { type: 'r', title: 'Walk-Run', details: '8 × (1 min jog / 2 min walk).' },
                    { type: 'str', title: 'Strength', details: 'Upper body + hip hinge (RDL, hip thrust). Avoid squats and lunges this week.' },
                    { type: 'j', title: 'Joint Session 1', details: 'Orientation: Practice movement patterns together. Coaching each other\'s technique.' }
                ],
                joint: { focus: "Orientation", details: "Meet the race format, test current fitness together. Easy 2 × 800m jog together." }
            },
            2: {
                vitor: [
                    { type: 'r', title: 'Aerobic Build', details: '4 × 800m easy. Rest 2:30. Aim for even splits.' },
                    { type: 's', title: 'Movement Volume', details: 'SkiErg 3 × 400m. Sled Push 3 × 25m moderate. Walking Lunges 3 × 40m. Burpee Broad Jumps 3 × 20m.' },
                    { type: 'c', title: 'First Combo', details: '2 rounds: 800m easy → Walking Lunges 25m → Burpee Broad Jumps 20m. Rest 4 min.' }
                ],
                darragh: [
                    { type: 'r', title: 'Walk-Run', details: '5 × (2 min jog / 1 min walk).' },
                    { type: 's', title: 'Machine Focus', details: 'SkiErg 4 × 200m. Sled Pull 3 × 25m light. Rower 3 × 500m.' },
                    { type: 'r', title: 'Walk-Run', details: '6 × (2 min jog / 1 min walk).' },
                    { type: 'str', title: 'Strength', details: 'Introduce goblet squat at light weight — assess knee honestly. Upper body pull focus.' },
                    { type: 'c', title: 'Machine Combo', details: '2 rounds: 3 min easy jog → SkiErg 200m → Rower 250m.' }
                ],
                joint: null
            },
            3: {
                vitor: [
                    { type: 'r', title: 'Speed Intro', details: '4 × 800m easy + 1 × 800m at a gear up (controlled discomfort). Rest 3 min.' },
                    { type: 's', title: 'Weight Intro', details: 'SkiErg 4 × 400m. Sled Push 4 × 25m. Walking Lunges 3 × 50m. Ram Thrusters 3 × 10 reps @ 25kg.' },
                    { type: 'j', title: 'Joint Session 2', details: 'Station Handoffs: 3 × 800m together easy. Practice transitions and station ownership.' }
                ],
                darragh: [
                    { type: 'r', title: 'Continuous Run', details: '2 × 1km easy continuous jog. First time running without walk breaks.' },
                    { type: 's', title: 'Heavy Sled', details: 'SkiErg 4 × 300m. Sled Pull 3 × 50m moderate. Rower 3 × 500m. Farmers Carry 3 × 50m.' },
                    { type: 'r', title: 'Interval Mixed', details: '3 × 800m: run 600m / walk 200m per rep.' },
                    { type: 'str', title: 'Strength', details: 'Strength + Ram Thrusters 3 × 10 @ light weight — monitor knee.' },
                    { type: 'j', title: 'Joint Session 2', details: 'Handoff Practice: Run full sequence at 50% effort. Time the handoffs.' }
                ],
                joint: { focus: "Station Handoffs", details: "3 × 800m together. Practice race strategy: when does one person start if the other is mid-station?" }
            },
            4: {
                vitor: [
                    { type: 'r', title: 'Volume Test', details: '5 × 800m easy. Rest 2:30. Break it as 3 + 2 mentally.' },
                    { type: 's', title: 'Dry Run', details: 'Station run-through @ 50% effort: SkiErg 500m → Farmers Carry 50m → Thrusters 15 @ 25kg → Sled Push 25m → Lunges 50m → BB Jumps 40m.' },
                    { type: 'c', title: 'Locomotion Combo', details: '3 rounds: 800m easy → Sled Push 25m → Walking Lunges 25m. Rest 4 min.' }
                ],
                darragh: [
                    { type: 'r', title: '800m Milestone', details: '3 × 800m easy continuous. First full 800m reps! Knee check.' },
                    { type: 's', title: 'Rower Volume', details: 'SkiErg 3 × 500m. Rower 3 × 750m. Sled Pull 4 × 50m moderate.' },
                    { type: 'r', title: 'Consistency', details: '4 × 800m easy. Rest 3 min.' },
                    { type: 'str', title: 'Strength', details: 'Increase squat load only if knee is fully comfortable.' },
                    { type: 'c', title: 'Combo', details: '2 rounds: 800m easy → SkiErg 500m → Rower 500m.' }
                ],
                joint: null
            },
            5: {
                vitor: [
                    { type: 'r', title: 'Intensity Pitch', details: '5 × 800m. Reps 1–4 easy, rep 5 push. Rest 2:30.' },
                    { type: 's', title: 'Race Weight', details: 'SkiErg 4 × 500m. Sled Push 4 × 50m (race weight). Walking Lunges 4 × 50m. Burpee Broad Jumps 3 × 40m.' },
                    { type: 'j', title: 'Joint Session 3', details: 'First Combo Together: 4 × 800m together. After run 2 and 4, hit stations (50%).' }
                ],
                darragh: [
                    { type: 'r', title: 'Volume+', details: '4 × 800m easy. Rest 2:30.' },
                    { type: 's', title: 'Station Intensity', details: 'SkiErg 4 × 500m. Sled Pull 4 × 50m race weight. Rower 4 × 500m. Thrusters 3 × 15 @ 35kg.' },
                    { type: 'r', title: 'Volume++', details: '5 × 800m easy. Rest 2:30.' },
                    { type: 'str', title: 'Strength', details: 'Introduce light bodyweight walking lunges (10m max) — assess knee.' },
                    { type: 'j', title: 'Joint Session 3', details: 'Fatigue Simulation: Practice race-day communication — pacing and calling reps.' }
                ],
                joint: { focus: "First Combo Together", details: "Run under fatigue into stations. Practice calling reps and managing each other's energy." }
            },
            6: {
                vitor: [
                    { type: 'r', title: 'Benchmark Run', details: '6 × 800m easy. Rest 2 min. note how reps 5 and 6 feel vs rep 1.' },
                    { type: 's', title: 'Power Station', details: 'Thrusters 4 × 15 reps @ 30kg. Farmers Carry 3 × 100m loaded. Sled Push 3 × 50m race weight.' },
                    { type: 'c', title: 'Impact Combo', details: '4 rounds: 800m → Sled Push 50m → Burpee Broad Jumps 40m. Rest 3:30.' }
                ],
                darragh: [
                    { type: 'r', title: 'Aerobic Base', details: '5 × 800m easy. Rest 2 min.' },
                    { type: 's', title: 'Full Distance', details: 'SkiErg 1 × 1,000m (first full distance!). Rower 1 × 1,000m. Sled Pull 3 × 50m.' },
                    { type: 'r', title: 'Endurance', details: '6 × 800m easy. Rest 2 min.' },
                    { type: 'str', title: 'Strength', details: 'Strength + Farmers Carry 3 × 100m loaded.' },
                    { type: 'c', title: 'Machine Combo', details: '3 rounds: 800m → SkiErg 500m → Rower 500m.' }
                ],
                joint: null
            },
            7: {
                vitor: [
                    { type: 'r', title: 'Race Pace Run', details: '6 × 800m. Reps 1–4 easy, reps 5–6 at race effort.' },
                    { type: 's', title: 'Vitor Run-through', details: 'Full station run-through (race pace/weight): Sled Push 50m → Lunges 100m → BB Jumps 80m → Farmers Carry 100m → Thrusters 30.' },
                    { type: 'j', title: 'Joint Session 4', details: 'Race Dress Rehearsal (Half): 4 × 800m at race effort. Complete all stations after each run.' }
                ],
                darragh: [
                    { type: 'r', title: 'Race Pace Run', details: '5 × 800m. Reps 1–3 easy, reps 4–5 race effort.' },
                    { type: 's', title: 'Darragh Run-through', details: 'Full station run-through (race pace/weight): SkiErg 1000m → Sled Pull 50m → Rower 1000m → Farmers Carry 100m → Thrusters 30.' },
                    { type: 'r', title: 'Aerobic Build', details: '6 × 800m easy-moderate.' },
                    { type: 'str', title: 'Strength', details: 'Regular strength session.' },
                    { type: 'j', title: 'Joint Session 4', details: 'Dress Rehearsal: Focus on pacing — don\'t go out hot on run 1.' }
                ],
                joint: { focus: "Race Dress Rehearsal (Half)", details: "Simulate first half of race day. 4 × 800m at race effort. Debrief managable vs hard elements." }
            },
            8: {
                vitor: [
                    { type: 'r', title: 'Mental Block', details: '7 × 800m easy. Rest 2 min. Cue: break into 3–3–1.' },
                    { type: 's', title: 'Heavy Loading', details: 'Sled Push 4 × 50m heavy. Walking Lunges 4 × 50m weighted. Burpee Broad Jumps 4 × 40m.' },
                    { type: 'c', title: 'Thruster Combo', details: '4 rounds: 800m → Walking Lunges 50m → Thrusters 15 @ 30kg. Rest 3 min.' }
                ],
                darragh: [
                    { type: 'r', title: 'Mental Block', details: '7 × 800m easy. Rest 2 min.' },
                    { type: 's', title: 'Machine Volume', details: 'SkiErg 2 × 1,000m. Rower 2 × 1,000m. Sled Pull 4 × 50m heavy.' },
                    { type: 'r', title: 'Race Repeats', details: '5 × 800m at race effort. Rest 90 sec.' },
                    { type: 'str', title: 'Deload Strength', details: 'Lighter weights, same movements. No new PBs this week.' },
                    { type: 'c', title: 'Long Combo', details: '4 rounds: 800m → SkiErg 500m → Rower 500m → Sled Pull 25m.' }
                ],
                joint: null
            },
            9: {
                vitor: [
                    { type: 'r', title: 'Visualisation', details: '4 × 800m at race effort. Visualise running into station at end of each rep.' },
                    { type: 'c', title: 'Race Simulation', details: '4 rounds: 800m → Sled Push 50m → Walking Lunges 50m. Minimal rest.' },
                    { type: 'j', title: 'Joint Session 5', details: 'Full Race Simulation: 8 × 800m together. Alternate station rounds every second run.' }
                ],
                darragh: [
                    { type: 'r', title: 'Race Repeats', details: '4 × 800m @ race effort. Rest 2 min.' },
                    { type: 'c', title: 'Race Simulation', details: '4 rounds: 800m → SkiErg 500m → Sled Pull 50m. Minimal transition.' },
                    { type: 'r', title: 'Active Flush', details: '5 × 800m easy.' },
                    { type: 's', title: 'Stations Mix', details: 'Rower 2 × 1,000m. Farmers Carry 3 × 100m. Thrusters 3 × 10 light.' },
                    { type: 'j', title: 'Joint Session 5', details: 'Simulation: Most important session. Experience full race demand at 70% effort.' }
                ],
                joint: { focus: "Full Race Simulation", details: "8 × 800m together. Not about speed — about getting through and understanding mental demands." }
            },
            10: {
                vitor: [
                    { type: 'r', title: 'Pace Rehearsal', details: '6 × 800m easy-moderate. Rest 90 sec.' },
                    { type: 'c', title: 'Final Hard Combo', details: '3 rounds: (800m → Sled Push 50m → BB Jumps 40m → 800m → Walking Lunges 50m). Rest 4 min.' },
                    { type: 's', title: 'Light Flush', details: 'Sled Push 2 × 25m easy. Lunges 25m bodyweight. Thrusters 2 × 10 light. No intensity.' }
                ],
                darragh: [
                    { type: 'r', title: 'Pace Rehearsal', details: '6 × 800m easy-moderate. Rest 90 sec.' },
                    { type: 'c', title: 'Final Hard Combo', details: '3 rounds: (800m → SkiErg 500m → Rower 500m → 800m → Sled Pull 50m).' },
                    { type: 'r', title: 'Active Recovery', details: '4 × 800m easy.' },
                    { type: 's', title: 'Light Practice', details: 'All movements easy. No max effort.' },
                    { type: 'j', title: 'Joint Session 6', details: 'Taper & Strategy: Final walkthrough. Start pace, station logistics, energy management.' }
                ],
                joint: { focus: "Taper & Strategy", details: "Arrive on the same page. Easy 2 × 800m. Walk through station handoffs. Confidence building." }
            },
            11: {
                vitor: [
                    { type: 'r', title: 'Short & Sharp', details: '3 × 800m easy. Confident, don\'t add more.' },
                    { type: 's', title: 'Easy Movement', details: 'Sled Push 2 × 25m light, Walking Lunges 25m, BB Jumps 20m.' },
                    { type: 'j', title: 'Joint Session 6', details: 'Strategy Finalisation: Hand-off practice and energy management.' }
                ],
                darragh: [
                    { type: 'r', title: 'Short & Sharp', details: '3 × 800m easy.' },
                    { type: 's', title: 'Light Machine', details: 'SkiErg 2 × 250m easy. Rower 2 × 250m easy.' },
                    { type: 'r', title: 'Active Flow', details: '2 × 800m easy.' },
                    { type: 'str', title: 'Activation', details: 'Very light mobility. No loading.' },
                    { type: 'rest', title: 'REST', details: 'Full rest or easy walk. Save it for race day.' }
                ],
                joint: { focus: "Race Day Prep", details: "Final strategy talk. No intensity." }
            }
        }
    };

    // --- Date Mapping ---
    // Week 1 starts Monday, April 13, 2026 (11 weeks before the July 4 race)
    const WEEK_1_START = new Date(2026, 3, 13, 7, 0, 0); // April 13, 2026, 07:00 local

    // Spread N sessions evenly across Mon–Fri (day offsets 0–4)
    const SESSION_SPREAD = {
        1: [0],
        2: [0, 4],
        3: [0, 2, 4],
        4: [0, 1, 3, 4],
        5: [0, 1, 2, 3, 4],
    };

    function getSessionDate(weekNum, sessionIndex, totalSessions) {
        const weekStart = new Date(WEEK_1_START);
        weekStart.setDate(weekStart.getDate() + (weekNum - 1) * 7);
        const spread = SESSION_SPREAD[Math.min(totalSessions, 5)] || SESSION_SPREAD[5];
        const dayOffset = spread[sessionIndex] !== undefined ? spread[sessionIndex] : sessionIndex % 5;
        const d = new Date(weekStart);
        d.setDate(d.getDate() + dayOffset);
        return d;
    }

    function getJointSessionDate(weekNum) {
        const d = new Date(WEEK_1_START);
        d.setDate(d.getDate() + (weekNum - 1) * 7 + 5); // Saturday of the week
        d.setHours(10, 0, 0, 0);
        return d;
    }

    function getSessionDurationMs(type) {
        const mins = { r: 45, s: 60, c: 75, str: 60, j: 90, rest: 30 };
        return (mins[type] || 60) * 60 * 1000;
    }

    // --- localStorage Helpers ---
    const LS_PLANNED   = 'tryka800-planned';
    const LS_COMPLETED = 'tryka800-completed';

    function _loadStore(key) {
        try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { return {}; }
    }

    function isPlanned(uid)   { return !!_loadStore(LS_PLANNED)[uid]; }
    function isCompleted(uid) { return !!_loadStore(LS_COMPLETED)[uid]; }

    function setPlanned(uid, val) {
        if (val === undefined) val = true;
        const store = _loadStore(LS_PLANNED);
        if (val) store[uid] = true; else delete store[uid];
        localStorage.setItem(LS_PLANNED, JSON.stringify(store));
    }

    function setCompleted(uid, val) {
        if (val === undefined) val = true;
        const store = _loadStore(LS_COMPLETED);
        if (val) store[uid] = true; else delete store[uid];
        localStorage.setItem(LS_COMPLETED, JSON.stringify(store));
    }

    // --- Calendar Event Data Builders ---
    function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

    function buildEventData(weekNum, athlete, sessionIndex, session) {
        const phase = trainingData.phases.find(p => p.weeks.includes(weekNum));
        const sessions = trainingData.weeks[weekNum][athlete];
        const dtstart = getSessionDate(weekNum, sessionIndex, sessions.length);
        const dtend = new Date(dtstart.getTime() + getSessionDurationMs(session.type));
        return {
            uid: `w${weekNum}-${athlete}-${sessionIndex}`,
            summary: `TRYKA 800 \u2014 ${session.title} (${capitalize(athlete)})`,
            description: `${session.details}\n\nPhase: ${phase.name}\nWeek ${weekNum}: ${phase.focus}`,
            dtstart,
            dtend,
        };
    }

    function buildJointEventData(weekNum) {
        const jointData = trainingData.weeks[weekNum].joint;
        if (!jointData) return null;
        const phase = trainingData.phases.find(p => p.weeks.includes(weekNum));
        const dtstart = getJointSessionDate(weekNum);
        const dtend = new Date(dtstart.getTime() + getSessionDurationMs('j'));
        return {
            uid: `w${weekNum}-joint-0`,
            summary: `TRYKA 800 \u2014 ${jointData.focus} (Joint Session)`,
            description: `${jointData.details}\n\nPhase: ${phase.name}\nWeek ${weekNum}: ${phase.focus}`,
            dtstart,
            dtend,
        };
    }

    // --- Calendar Export Actions ---
    function handleCalAction(action, weekNum, athlete, idx) {
        if (typeof TrykaCalendar === 'undefined') return;
        const isJoint = athlete === 'joint';
        const eventData = isJoint
            ? buildJointEventData(weekNum)
            : buildEventData(weekNum, athlete, idx, trainingData.weeks[weekNum][athlete][idx]);
        if (!eventData) return;

        if (action === 'ics') {
            const cal = TrykaCalendar.buildIcsCalendar([TrykaCalendar.buildIcsEvent(eventData)]);
            const fname = isJoint
                ? `tryka800-w${weekNum}-joint.ics`
                : `tryka800-w${weekNum}-session${idx + 1}-${athlete}.ics`;
            TrykaCalendar.downloadIcs(cal, fname);
        } else if (action === 'google') {
            window.open(TrykaCalendar.buildGoogleCalendarUrl(eventData), '_blank');
        } else if (action === 'outlook') {
            window.open(TrykaCalendar.buildOutlookUrl(eventData), '_blank');
        }

        setPlanned(eventData.uid);
        updateWeekBtnBadges();
        renderSessions();
    }

    function exportWeek() {
        if (typeof TrykaCalendar === 'undefined') return;
        const events = [];
        if (currentAthlete === 'joint') {
            const eventData = buildJointEventData(currentWeek);
            if (eventData) { events.push(TrykaCalendar.buildIcsEvent(eventData)); setPlanned(eventData.uid); }
        } else {
            trainingData.weeks[currentWeek][currentAthlete].forEach((session, idx) => {
                const eventData = buildEventData(currentWeek, currentAthlete, idx, session);
                events.push(TrykaCalendar.buildIcsEvent(eventData));
                setPlanned(eventData.uid);
            });
        }
        if (!events.length) return;
        TrykaCalendar.downloadIcs(
            TrykaCalendar.buildIcsCalendar(events),
            `tryka800-w${currentWeek}-${currentAthlete}.ics`
        );
        updateWeekBtnBadges();
        renderSessions();
    }

    function exportFullPlan() {
        if (typeof TrykaCalendar === 'undefined') return;
        const events = [];
        for (let w = 1; w <= 11; w++) {
            if (currentAthlete === 'joint') {
                const eventData = buildJointEventData(w);
                if (eventData) { events.push(TrykaCalendar.buildIcsEvent(eventData)); setPlanned(eventData.uid); }
            } else {
                trainingData.weeks[w][currentAthlete].forEach((session, idx) => {
                    const eventData = buildEventData(w, currentAthlete, idx, session);
                    events.push(TrykaCalendar.buildIcsEvent(eventData));
                    setPlanned(eventData.uid);
                });
            }
        }
        if (!events.length) return;
        TrykaCalendar.downloadIcs(
            TrykaCalendar.buildIcsCalendar(events),
            `tryka800-full-${currentAthlete}.ics`
        );
        updateWeekBtnBadges();
        renderSessions();
    }

    // --- Progress & Missed-Session Helpers ---
    function updateWeekBtnBadges() {
        for (let w = 1; w <= 11; w++) {
            const btn = document.querySelector(`.week-btn[data-week="${w}"]`);
            if (!btn) continue;
            let anyPlanned = false, anyCompleted = false;
            ['vitor', 'darragh'].forEach(athlete => {
                trainingData.weeks[w][athlete].forEach((_, idx) => {
                    const uid = `w${w}-${athlete}-${idx}`;
                    if (isPlanned(uid))   anyPlanned   = true;
                    if (isCompleted(uid)) anyCompleted = true;
                });
            });
            if (trainingData.weeks[w].joint) {
                const uid = `w${w}-joint-0`;
                if (isPlanned(uid))   anyPlanned   = true;
                if (isCompleted(uid)) anyCompleted = true;
            }
            btn.classList.toggle('has-planned',   anyPlanned);
            btn.classList.toggle('has-completed', anyCompleted);
        }
    }

    function updateProgressSummary() {
        const el = document.getElementById('progress-summary');
        if (!el) return;
        if (currentAthlete === 'joint') {
            const jointData = trainingData.weeks[currentWeek].joint;
            if (!jointData) { el.textContent = ''; return; }
            const uid = `w${currentWeek}-joint-0`;
            el.innerHTML = `Week ${currentWeek}: ` +
                (isPlanned(uid)
                    ? '<span class="ps-done">exported</span>'
                    : '<span class="ps-pending">not exported</span>') +
                (isCompleted(uid) ? ' &middot; <span class="ps-done">done ✓</span>' : '');
            return;
        }
        const sessions = trainingData.weeks[currentWeek][currentAthlete];
        let plannedCount = 0, completedCount = 0;
        sessions.forEach((_, idx) => {
            const uid = `w${currentWeek}-${currentAthlete}-${idx}`;
            if (isPlanned(uid))   plannedCount++;
            if (isCompleted(uid)) completedCount++;
        });
        el.innerHTML =
            `Week ${currentWeek}: ` +
            `<span class="${plannedCount > 0 ? 'ps-done' : 'ps-pending'}">${plannedCount}/${sessions.length} exported</span>` +
            ` &middot; <span class="${completedCount > 0 ? 'ps-done' : 'ps-pending'}">${completedCount}/${sessions.length} done</span>`;
    }

    function checkMissedSessions() {
        const bannerEl = document.getElementById('missed-banner');
        if (!bannerEl) return;
        if (currentAthlete === 'joint') { bannerEl.style.display = 'none'; return; }

        const todayMidnight = new Date();
        todayMidnight.setHours(0, 0, 0, 0);
        const missed = [];
        for (let w = 1; w <= 11; w++) {
            const sessions = trainingData.weeks[w][currentAthlete];
            sessions.forEach((session, idx) => {
                if (getSessionDate(w, idx, sessions.length) < todayMidnight &&
                    !isCompleted(`w${w}-${currentAthlete}-${idx}`)) {
                    missed.push({ w, idx, session });
                }
            });
        }

        if (!missed.length) { bannerEl.style.display = 'none'; return; }

        const latest = missed[missed.length - 1];
        bannerEl.style.display = 'flex';
        bannerEl.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>You have <strong>${missed.length}</strong> missed session${missed.length > 1 ? 's' : ''}.
            Last: <em>${latest.session.title}</em> (Week ${latest.w}).</span>
            <button class="reschedule-btn" aria-label="Reschedule missed session">
                <i class="fas fa-calendar-plus"></i> Reschedule
            </button>
        `;
        bannerEl.querySelector('.reschedule-btn').addEventListener('click', () => {
            if (typeof TrykaCalendar === 'undefined') return;
            const { w, idx, session } = latest;
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(7, 0, 0, 0);
            const dtend = new Date(tomorrow.getTime() + getSessionDurationMs(session.type));
            const phase = trainingData.phases.find(p => p.weeks.includes(w));
            const eventData = {
                uid: `w${w}-${currentAthlete}-${idx}-reschedule`,
                summary: `TRYKA 800 \u2014 ${session.title} (${capitalize(currentAthlete)}) [Rescheduled]`,
                description: `${session.details}\n\nRescheduled from Week ${w}\nPhase: ${phase.name}`,
                dtstart: tomorrow,
                dtend,
            };
            TrykaCalendar.downloadIcs(
                TrykaCalendar.buildIcsCalendar([TrykaCalendar.buildIcsEvent(eventData)]),
                `tryka800-w${w}-session${idx + 1}-${currentAthlete}-rescheduled.ics`
            );
        });
    }

    // --- Dashboard UI Logic ---
    const weekNav = document.getElementById('week-nav');
    const athleteBtns = document.querySelectorAll('.athlete-btn');
    const sessionContainer = document.getElementById('session-cards-container');
    const phaseNameEl = document.getElementById('current-phase-name');

    let currentWeek = 1;
    let currentAthlete = 'vitor';

    function initDashboard() {
        // Create week buttons
        for (let i = 1; i <= 11; i++) {
            const btn = document.createElement('button');
            btn.className = `week-btn ${i === 1 ? 'active' : ''}`;
            btn.dataset.week = i;
            btn.innerText = `WEEK ${i}`;
            btn.onclick = () => {
                document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentWeek = i;
                renderSessions();
            };
            weekNav.appendChild(btn);
        }

        // Athlete toggle click listeners
        athleteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                athleteBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentAthlete = btn.dataset.athlete;
                renderSessions();
            });
        });

        // Export bar buttons
        document.getElementById('export-week-btn').addEventListener('click', exportWeek);
        document.getElementById('export-full-btn').addEventListener('click', exportFullPlan);

        // Session card event delegation — cal-btn, cal-option, done-check
        sessionContainer.addEventListener('click', e => {
            const calBtn = e.target.closest('.cal-btn');
            if (calBtn) {
                e.stopPropagation();
                const wrap = calBtn.closest('.cal-btn-wrap');
                const dropdown = wrap.querySelector('.cal-dropdown');
                const wasOpen = dropdown.classList.contains('open');
                document.querySelectorAll('.cal-dropdown.open').forEach(d => d.classList.remove('open'));
                if (!wasOpen) dropdown.classList.add('open');
                return;
            }

            const calOption = e.target.closest('.cal-option');
            if (calOption) {
                e.stopPropagation();
                const card = calOption.closest('.session-card');
                handleCalAction(
                    calOption.dataset.action,
                    parseInt(card.dataset.week),
                    card.dataset.athlete,
                    parseInt(card.dataset.idx)
                );
                calOption.closest('.cal-dropdown').classList.remove('open');
                return;
            }

            const doneCheck = e.target.closest('.done-check');
            if (doneCheck) {
                const card = doneCheck.closest('.session-card');
                const uid = `w${card.dataset.week}-${card.dataset.athlete}-${card.dataset.idx}`;
                setCompleted(uid, doneCheck.checked);
                card.classList.toggle('card-completed', doneCheck.checked);
                const sessionDay = card.querySelector('.session-day');
                const existingBadge = sessionDay.querySelector('.completed-check-badge');
                if (doneCheck.checked && !existingBadge) {
                    sessionDay.insertAdjacentHTML('beforeend', '<span class="completed-check-badge" title="Marked as done"> ✓</span>');
                } else if (!doneCheck.checked && existingBadge) {
                    existingBadge.remove();
                }
                updateWeekBtnBadges();
                updateProgressSummary();
                checkMissedSessions();
                return;
            }
        });

        // Close cal-dropdowns when clicking outside any card
        document.addEventListener('click', () => {
            document.querySelectorAll('.cal-dropdown.open').forEach(d => d.classList.remove('open'));
        });

        renderSessions();
        updateWeekBtnBadges();
    }

    function renderSessions() {
        sessionContainer.innerHTML = '';

        // Update Phase indicator
        const phase = trainingData.phases.find(p => p.weeks.includes(currentWeek));
        phaseNameEl.innerText = phase.name;

        if (currentAthlete === 'joint') {
            const jointData = trainingData.weeks[currentWeek].joint;
            if (jointData) {
                const uid = `w${currentWeek}-joint-0`;
                const planned   = isPlanned(uid);
                const completed = isCompleted(uid);
                const card = document.createElement('div');
                card.className = `session-card reveal active${completed ? ' card-completed' : ''}`;
                card.dataset.week    = currentWeek;
                card.dataset.athlete = 'joint';
                card.dataset.idx     = 0;
                card.innerHTML = `
                    <span class="session-type-badge type-j">JOINT</span>
                    <span class="session-day">WEEK ${currentWeek} FOCUS${planned ? '<span class="planned-dot" title="Exported to calendar"></span>' : ''}${completed ? '<span class="completed-check-badge" title="Marked as done"> ✓</span>' : ''}</span>
                    <h3 class="session-title">${jointData.focus}</h3>
                    <p class="session-details">${jointData.details}</p>
                    <div class="card-footer">
                        <div class="cal-btn-wrap">
                            <button class="cal-btn" aria-label="Add to calendar"><i class="fas fa-calendar-plus"></i> Calendar</button>
                            <div class="cal-dropdown">
                                <button class="cal-option" data-action="ics">📅 Download .ics</button>
                                <button class="cal-option" data-action="google">📆 Google Calendar</button>
                                <button class="cal-option" data-action="outlook">📧 Outlook Web</button>
                            </div>
                        </div>
                        <label class="done-wrap"><input type="checkbox" class="done-check"${completed ? ' checked' : ''}> Done</label>
                    </div>
                `;
                sessionContainer.appendChild(card);
            } else {
                sessionContainer.innerHTML = `<div class="no-session-msg">No joint session scheduled for Week ${currentWeek}. Both athletes follow individual plans.</div>`;
            }
            updateProgressSummary();
            checkMissedSessions();
            return;
        }

        const sessions = trainingData.weeks[currentWeek][currentAthlete];
        sessions.forEach((session, index) => {
            const uid       = `w${currentWeek}-${currentAthlete}-${index}`;
            const planned   = isPlanned(uid);
            const completed = isCompleted(uid);
            const card = document.createElement('div');
            card.className = `session-card reveal active${completed ? ' card-completed' : ''}`;
            card.dataset.week    = currentWeek;
            card.dataset.athlete = currentAthlete;
            card.dataset.idx     = index;
            card.innerHTML = `
                <span class="session-type-badge type-${session.type}">${getBadgeName(session.type)}</span>
                <span class="session-day">SESSION ${index + 1}${planned ? '<span class="planned-dot" title="Exported to calendar"></span>' : ''}${completed ? '<span class="completed-check-badge" title="Marked as done"> ✓</span>' : ''}</span>
                <h3 class="session-title">${session.title}</h3>
                <p class="session-details">${session.details}</p>
                <div class="card-footer">
                    <div class="cal-btn-wrap">
                        <button class="cal-btn" aria-label="Add to calendar"><i class="fas fa-calendar-plus"></i> Calendar</button>
                        <div class="cal-dropdown">
                            <button class="cal-option" data-action="ics">📅 Download .ics</button>
                            <button class="cal-option" data-action="google">📆 Google Calendar</button>
                            <button class="cal-option" data-action="outlook">📧 Outlook Web</button>
                        </div>
                    </div>
                    <label class="done-wrap"><input type="checkbox" class="done-check"${completed ? ' checked' : ''}> Done</label>
                </div>
            `;
            sessionContainer.appendChild(card);
        });

        updateProgressSummary();
        checkMissedSessions();
    }

    function getBadgeName(type) {
        switch(type) {
            case 'r': return 'RUN';
            case 's': return 'STATION';
            case 'c': return 'COMBO';
            case 'str': return 'STRENGTH';
            case 'j': return 'JOINT';
            case 'rest': return 'REST';
            default: return 'TRAINING';
        }
    }

    initDashboard();

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Smooth Scroll for Hero Chevron ---
    document.querySelector('.scroll-down').addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// =============================================
// PARALLAX HERO — feat/scroll-animations
// =============================================
(function initParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.3}px)`;
    }, { passive: true });
})();

// =============================================
// BAR ANIMATIONS — feat/bar-animations
// =============================================
(function initBarAnimations() {
    const bars = document.querySelectorAll('.bar[data-width]');
    if (!bars.length) return;
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.width;
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    bars.forEach(bar => barObserver.observe(bar));
})();
