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

        renderSessions();
    }

    function renderSessions() {
        sessionContainer.innerHTML = '';
        
        // Update Phase indicator
        const phase = trainingData.phases.find(p => p.weeks.includes(currentWeek));
        phaseNameEl.innerText = phase.name;

        if (currentAthlete === 'joint') {
            const jointData = trainingData.weeks[currentWeek].joint;
            if (jointData) {
                sessionContainer.innerHTML = `
                    <div class="session-card reveal active">
                        <span class="session-type-badge type-j">JOINT</span>
                        <span class="session-day">WEEK ${currentWeek} FOCUS</span>
                        <h3 class="session-title">${jointData.focus}</h3>
                        <p class="session-details">${jointData.details}</p>
                    </div>
                `;
            } else {
                sessionContainer.innerHTML = `<div class="no-session-msg">No joint session scheduled for Week ${currentWeek}. Both athletes follow individual plans.</div>`;
            }
            return;
        }

        const sessions = trainingData.weeks[currentWeek][currentAthlete];
        sessions.forEach((session, index) => {
            const card = document.createElement('div');
            card.className = 'session-card reveal active';
            card.innerHTML = `
                <span class="session-type-badge type-${session.type}">${getBadgeName(session.type)}</span>
                <span class="session-day">SESSION ${index + 1}</span>
                <h3 class="session-title">${session.title}</h3>
                <p class="session-details">${session.details}</p>
            `;
            sessionContainer.appendChild(card);
        });
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
// CONFETTI ON RACE DAY — feat/countdown-polish
(function initConfetti() {
    const targetDate = new Date('July 4, 2026 09:00:00').getTime();
    let confettiFired = false;
    function checkForRaceDay() {
        if (new Date().getTime() >= targetDate && !confettiFired && typeof confetti === 'function') {
            confettiFired = true;
            confetti({ particleCount: 300, spread: 160, origin: { y: 0.5 }, colors: ['#bcff00', '#ffffff', '#00ffff'] });
            setTimeout(() => confetti({ particleCount: 200, spread: 120, origin: { y: 0.3 } }), 1000);
        }
    }
    setInterval(checkForRaceDay, 1000);

// =============================================
// CONFETTI ON RACE DAY — feat/countdown-polish
// =============================================
(function initConfetti() {
    const targetDate = new Date('July 4, 2026 09:00:00').getTime();
    let confettiFired = false;
    function checkForRaceDay() {
        if (new Date().getTime() >= targetDate && !confettiFired && typeof confetti === 'function') {
            confettiFired = true;
            confetti({ particleCount: 300, spread: 160, origin: { y: 0.5 }, colors: ['#bcff00', '#ffffff', '#00ffff'] });
            setTimeout(() => confetti({ particleCount: 200, spread: 120, origin: { y: 0.3 } }), 1000);
        }
    }
    setInterval(checkForRaceDay, 1000);
})();
