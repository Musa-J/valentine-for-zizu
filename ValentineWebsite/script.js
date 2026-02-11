// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('DOM fully loaded - Initializing Valentine Website');
    
    // ========== ELEMENTS ==========
    // Pages
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    const page7 = document.getElementById('page7'); // Why I Love You page
    const page5 = document.getElementById('page5'); // Video page
    const page8 = document.getElementById('page8'); // Proposal page
    
    // Log page elements to check if they exist
    console.log('Page 1 found:', !!page1);
    console.log('Page 2 found:', !!page2);
    console.log('Page 3 found:', !!page3);
    console.log('Page 4 found:', !!page4);
    console.log('Page 5 found:', !!page5);
    console.log('Page 7 found:', !!page7);
    console.log('Page 8 found:', !!page8);
    
    if (!page8) {
        console.error('CRITICAL: Page 8 element not found! Check HTML id="page8"');
    }
    
    // Page 1 Elements
    const enterHeartBtn = document.getElementById('enterHeartBtn');
    
    // Page 2 Elements
    const heartEnvelope = document.getElementById('heartEnvelope');
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const openLoveLetterBtn = document.getElementById('openLoveLetter');
    const cuteButton = document.getElementById('continueBtn');
    
    // Page 3 Elements
    const cameraButton = document.getElementById('cameraButton');
    const polaroidContainer = document.getElementById('polaroidContainer');
    const photoCountElement = document.getElementById('photoCount');
    const nextPageBtn = document.getElementById('nextPageBtn');
    
    // Page 4 Elements
    const readAloudBtn = document.getElementById('readAloudBtn');
    const finalPageBtn = document.getElementById('finalPageBtn');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Page 7 Elements (Why I Love You)
    const reasonsGrid = document.getElementById('reasonsGrid');
    const revealHeart = document.getElementById('revealHeart');
    const reasonsCount = document.getElementById('reasonsCount');
    const loveMeterFill = document.getElementById('loveMeterFill');
    const loveMeterText = document.getElementById('loveMeterText');
    const secretBtn = document.getElementById('secretBtn');
    const secretMessage = document.getElementById('secretMessage');
    const categories = document.querySelectorAll('.category');
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextToPage5Btn = document.getElementById('nextToPage8'); // Goes to page 5
    
    // Page 5 Elements (Video page)
    const playVideoBtn = document.getElementById('playVideoBtn');
    const videoOverlay = document.getElementById('videoOverlay');
    const ourVideo = document.getElementById('ourVideo');
    const videoPrevBtn = document.getElementById('videoPrevBtn');
    const videoNextBtn = document.getElementById('videoNextBtn');
    const videoPlayPause = document.getElementById('videoPlayPause');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const videoProgressBar = document.getElementById('videoProgressBar');
    const currentTimeElement = document.getElementById('currentTime');
    const durationElement = document.getElementById('duration');
    const watchCountElement = document.getElementById('watchCount');
    
    // Page 8 Elements (Proposal page)
    const yesBtn = document.getElementById('yesBtn');
    const successMessage = document.getElementById('successMessage');
    const proposalBackBtn = document.getElementById('proposalBackBtn');
    const countdownTimer = document.getElementById('countdownTimer');
    
    // Audio Elements
    const bgMusic = document.getElementById('bgMusic');
    const heartSound = document.getElementById('heartSound');
    const magicSound = document.getElementById('magicSound');
    const customLetterAudio = document.getElementById('customLetterAudio');
    
    // ========== VARIABLES ==========
    let musicStarted = false;
    let photosRevealed = 0;
    const totalPhotos = 3;
    let isAudioPlaying = false;
    let originalBgVolume = 0.5;
    let isMusicLowered = false;
    
    // For Page 7
    let revealedReasons = 0;
    const totalReasons = 100;
    let currentCategory = 'all';
    let isSecretRevealed = false;
    
    // For Page 5 (Video)
    let watchCount = 0;
    let isVideoPlaying = false;
    let videoOriginalVolume = 1;
    let bgMusicWasPlaying = false;
    let bgMusicWasPaused = false;
    
    // Photo URLs - REPLACE THESE WITH YOUR ACTUAL PHOTOS!
    const photoUrls = [
        'photos/photo1.jpeg',
        'photos/photo2.jpeg',
        'photos/photo3.jpeg'
    ];
    
    // Reasons database for Page 7
    const reasonsDatabase = {
        all: [],
        personality: [
            "Your kind heart that cares for everyone",
            "The way you make me laugh",
            "Your intelligence and how we can talk about anything",
            "Your patience with me when I'm on my periods",
            "How you always know what to say to make me feel better",
            "Your positivity in life",
            "The way you stand up for what you believe in",
            "Your incredible sense of humor and dark humor",
            "How you remember little things about me",
            "Your ability to make everyone feel special",
            "Your passion for the things you love",
            "The way you challenge me to be better",
            "Your honesty",
            "How you handle difficult situations",
            "Your adventurous spirit",
            "The way you listen with your full attention",
            "Your creativity and imagination",
            "How you inspire me every single day",
            "Your determination and strength",
            "The way you make ordinary moments magical",
            "Your trust for me",
            "Your efforts for me"
        ],
        looks: [
            "Your beautiful eyes that I could get lost in",
            "That perfect smile that lights up any room",
            "The way your hair looks",
            "Your laugh that's more beautiful than anything",
            "The cute way you wrinkle your nose",
            "How you look at me with so much love in your eyes",
            "Your style and the way you carry yourself",
            "That one specific feature I find irresistible",
            "The way you glow when you're happy",
            "How beautiful you look when you're focused",
            "Your cute small hands",
            "The way you walk with me",
            "Your sleeping face that's so peaceful",
            "How you look when you first wake up",
            "The sparkle in your eyes when you're excited",
            "Your smile lines that show a life of happiness",
            "The way you look in your favorite outfit",
            "How beautiful you are without even trying",
            "Your deadly slow killing eyes",
            "Everything about you is perfect to me",
            "You leaning here and there is the cutest thing",
            "Your cute cheeks",
            "Your chashmish face",
            "Your sweetest voice",
            "Your soft soft arms"
        ],
        moments: [
            "The very first chat we had together",
            "Our first meetup that felt like a dream",
            "That time we almost stayed up all night talking",
            "The way you looked at me when you thought I wasn't looking",
            "Our inside jokes that nobody else understands",
            "The surprise you planned that made me feel so special",
            "When you held my hand for the first time",
            "Our adventures together",
            "The quiet moments when we just exist together",
            "The moment when I could just hug you for hours non-stop",
            "The way you support me unconditionally",
            "When we video called for the first time",
            "Our movie night together",
            "The way you dance when we were on video call",
            "When you sing along to music",
            "The moment I drove you in my car",
            "How you always in the form of fun",
            "The scent of your hair",
            "Our kiss on the cheeks",
            "Every single moment I get to spend with you",
            "When we hugged for the very frst time and it happened own it's own",
            "Tumhe khana khilana",
            "Tumhara khana khilana",
            "When we called for the first time late in the line 2 hrs straight"
        ],
        future: [
            "I can't wait to wake up next to you every day",
            "Building a life together with you",
            "Growing old with you by my side",
            "Creating our own family",
            "Traveling the world with you",
            "Watching sunsets together forever",
            "Zoha and Zaviyan",
            "Learning new things together",
            "Overcoming challenges as a team",
            "Creating a home that's uniquely ours",
            "Watching you achieve all your goals",
            "Being your biggest cheerleader always",
            "Making you smile every single day",
            "Being the person you can always rely on",
            "Creating millions more memories together",
            "Horse riding together",
            "Kissing you when you're ill knowing i'll get too",
            "Cooking food together",
            "Late night walks",
            "Late night movies together",
            "Staring you while you are busy doing makeup",
            "Making your paths easy",
            "Tie your hair myself",
            "Ghar ki Atma Chamkana with You",
            "Make  noodles for you",
            "Complete all your wishes and craving anytime anywhere",
            "Everything you do I want to do it besides you",
            "Protect you from harm",
            "Dancing together",
        ]
    };
    
    // Combine all reasons for 'all' category
    reasonsDatabase.all = [
        ...reasonsDatabase.personality,
        ...reasonsDatabase.looks,
        ...reasonsDatabase.moments,
        ...reasonsDatabase.future
    ];
    
    // ========== INITIALIZATION ==========
    createFloatingHearts();
    setupBackgroundMusic();
    
    // ========== PAGE 1: HEART ENTRANCE ==========
    if (enterHeartBtn) {
        enterHeartBtn.addEventListener('click', function() {
            playSound(heartSound, 0.7);
            
            gsap.to(this, {
                scale: 20,
                duration: 2,
                ease: "power2.out",
                onComplete: () => {
                    page1.classList.add('hidden');
                    page2.classList.remove('hidden');
                    
                    gsap.from(page2, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 1.5,
                        ease: "back.out(1.7)"
                    });
                    
                    setTimeout(() => {
                        playSound(magicSound, 0.8);
                    }, 300);
                    
                    createHeartExplosion();
                }
            });
        });
    }
    
    // ========== PAGE 2: ENVELOPE & BUTTON ==========
    if (heartEnvelope) {
        heartEnvelope.addEventListener('click', function() {
            if (!envelope.classList.contains('open')) {
                envelope.classList.add('open');
                setTimeout(() => {
                    letter.classList.remove('hidden');
                    letter.classList.add('visible');
                    playSound(magicSound, 0.6);
                }, 300);
            }
        });
    }
    
    if (openLoveLetterBtn) {
        openLoveLetterBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            goToPage3();
        });
    }
    
    if (cuteButton) {
        cuteButton.addEventListener('click', function() {
            const cub = document.querySelector('.cub');
            if (cub) {
                gsap.to(cub, {
                    y: -20,
                    rotation: 10,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                });
            }
            
            if (!envelope.classList.contains('open')) {
                envelope.classList.add('open');
                setTimeout(() => {
                    letter.classList.remove('hidden');
                    letter.classList.add('visible');
                }, 300);
            }
            
            setTimeout(() => {
                goToPage3();
            }, 1000);
        });
    }
    
    // ========== PAGE 3: POLAROID GALLERY ==========
    if (cameraButton) {
        cameraButton.addEventListener('click', revealPhoto);
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', goToPage4);
    }
    
    function initPage3() {
        photosRevealed = 0;
        if (photoCountElement) photoCountElement.textContent = '0';
        if (polaroidContainer) polaroidContainer.innerHTML = '';
        if (nextPageBtn) nextPageBtn.classList.add('hidden');
    }
    
    function revealPhoto() {
        if (photosRevealed >= totalPhotos) return;
        
        createCameraFlash();
        
        setTimeout(() => {
            const polaroid = createPolaroid(photosRevealed);
            if (polaroidContainer) polaroidContainer.appendChild(polaroid);
            
            setTimeout(() => {
                polaroid.classList.add('revealed');
                
                gsap.to(polaroid, {
                    rotation: `+=${Math.random() * 10 - 5}`,
                    duration: 0.5,
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.inOut"
                });
            }, 100);
            
            photosRevealed++;
            if (photoCountElement) photoCountElement.textContent = photosRevealed;
            
            if (photosRevealed === totalPhotos) {
                setTimeout(() => {
                    if (nextPageBtn) {
                        nextPageBtn.classList.remove('hidden');
                        gsap.from(nextPageBtn, {
                            opacity: 0,
                            y: 20,
                            duration: 1,
                            ease: "back.out(1.7)"
                        });
                    }
                }, 1000);
            }
        }, 300);
    }
    
    function createPolaroid(index) {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        polaroid.style.setProperty('--rotation', `${index === 0 ? -5 : index === 1 ? 8 : -3}deg`);
        
        if (index === 0) {
            polaroid.style.top = '10%';
            polaroid.style.left = '10%';
        } else if (index === 1) {
            polaroid.style.top = '5%';
            polaroid.style.right = '10%';
        } else {
            polaroid.style.bottom = '10%';
            polaroid.style.left = '30%';
        }
        
        const img = document.createElement('img');
        img.className = 'polaroid-img';
        img.src = photoUrls[index];
        img.alt = `Our memory ${index + 1}`;
        
        img.onerror = function() {
            this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="150" height="150" fill="%23ffafbd"/><text x="75" y="75" font-family="Arial" font-size="14" fill="%237a0042" text-anchor="middle" dy=".3em">Photo ' + (index + 1) + '</text></svg>';
        };
        
        polaroid.appendChild(img);
        return polaroid;
    }
    
    // ========== PAGE 4: LOVE LETTER ==========
    function goToPage4() {
        page3.classList.add('hidden');
        page4.classList.remove('hidden');
        
        gsap.from(page4, {
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
            ease: "back.out(1.7)"
        });
        
        startLetterAnimation();
        initScrollFeatures();
        createHeartExplosion();
        playSound(magicSound, 0.7);
    }
    
    // Initialize scroll features for page 4
    const letterPaper = document.querySelector('.letter-paper.scrollable');
    const progressBar = document.getElementById('progressBar');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    function initScrollFeatures() {
        if (letterPaper) {
            letterPaper.scrollTop = 0;
            if (progressBar) progressBar.style.width = '0%';
            if (scrollToTopBtn) scrollToTopBtn.classList.remove('visible');
            if (scrollIndicator) scrollIndicator.classList.remove('hidden');
        }
        
        if (letterPaper) {
            letterPaper.addEventListener('scroll', updateScrollProgress);
        }
    }
    
    function updateScrollProgress() {
        if (!letterPaper) return;
        
        const scrollTop = letterPaper.scrollTop;
        const scrollHeight = letterPaper.scrollHeight - letterPaper.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        if (progressBar) {
            progressBar.style.width = scrollPercentage + '%';
        }
        
        if (scrollToTopBtn && scrollIndicator) {
            if (scrollTop > 300) {
                scrollToTopBtn.classList.add('visible');
                scrollIndicator.classList.add('hidden');
            } else {
                scrollToTopBtn.classList.remove('visible');
                scrollIndicator.classList.remove('hidden');
            }
        }
        
        triggerScrollAnimations(scrollTop);
    }
    
    function triggerScrollAnimations(scrollTop) {
        const letterLines = document.querySelectorAll('.letter-line');
        if (!letterPaper) return;
        
        const windowHeight = letterPaper.clientHeight;
        
        letterLines.forEach((line, index) => {
            const lineTop = line.offsetTop;
            const lineHeight = line.offsetHeight;
            
            if (scrollTop + windowHeight > lineTop + lineHeight / 2) {
                if (!line.classList.contains('animated')) {
                    line.classList.add('animated');
                    gsap.to(line, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        delay: index * 0.1
                    });
                }
            }
        });
        
        const signature = document.querySelector('.letter-signature');
        if (signature && scrollTop + windowHeight > signature.offsetTop + 100) {
            if (!signature.classList.contains('animated')) {
                signature.classList.add('animated');
                gsap.to(signature, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                });
            }
        }
    }
    
    function startLetterAnimation() {
        const letterLines = document.querySelectorAll('.letter-line');
        const signature = document.querySelector('.letter-signature');
        const endMarker = document.querySelector('.end-marker');
        
        letterLines.forEach(line => {
            line.classList.remove('animated');
            line.style.opacity = '0';
            line.style.transform = 'translateY(20px)';
        });
        
        if (signature) {
            signature.classList.remove('animated');
            signature.style.opacity = '0';
        }
        
        if (endMarker) {
            endMarker.style.opacity = '0';
        }
        
        const initialLines = Array.from(letterLines).slice(0, 10);
        initialLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('animated');
                gsap.to(line, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }, index * 300 + 300);
        });
        
        if (endMarker) {
            setTimeout(() => {
                gsap.to(endMarker, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                });
            }, 11000);
        }
    }
    
    function scrollToTop() {
        if (letterPaper) {
            letterPaper.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    
    if (letterPaper) {
        setTimeout(() => {
            updateScrollProgress();
        }, 1000);
    }
    
    // ========== CUSTOM AUDIO FOR LETTER ==========
    function playCustomLetterAudio() {
        if (!customLetterAudio) {
            alert("Audio file not found.");
            return;
        }
        
        if (isAudioPlaying) {
            pauseCustomAudio();
            return;
        }
        
        originalBgVolume = bgMusic.volume;
        lowerBackgroundMusicForAudio();
        
        customLetterAudio.volume = 1.0;
        customLetterAudio.currentTime = 0;
        
        isAudioPlaying = true;
        updateAudioButton();
        
        const playPromise = customLetterAudio.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error("Audio play failed:", error);
                alert("Couldn't play the audio. Please click the page first, then try again.");
                isAudioPlaying = false;
                updateAudioButton();
                restoreBackgroundMusic();
            });
        }
    }
    
    function lowerBackgroundMusicForAudio() {
        if (bgMusic && !bgMusic.paused && bgMusic.volume > 0.1) {
            gsap.to(bgMusic, {
                volume: 0.1,
                duration: 2,
                ease: "power2.out"
            });
        }
    }
    
    function pauseCustomAudio() {
        if (customLetterAudio && isAudioPlaying) {
            customLetterAudio.pause();
            isAudioPlaying = false;
            updateAudioButton();
            
            setTimeout(() => {
                restoreBackgroundMusic();
            }, 1000);
        }
    }
    
    function restoreBackgroundMusic() {
        if (bgMusic) {
            gsap.to(bgMusic, {
                volume: originalBgVolume,
                duration: 3,
                ease: "power2.inOut"
            });
        }
    }
    
    function updateAudioButton() {
        if (!readAloudBtn) return;
        
        if (isAudioPlaying) {
            readAloudBtn.innerHTML = '<i class="fas fa-pause"></i><span>Pause My Voice</span>';
            readAloudBtn.style.background = 'linear-gradient(135deg, #ff9800, #ff5722)';
        } else {
            readAloudBtn.innerHTML = '<i class="fas fa-play-circle"></i><span>Hear My Voice</span>';
            readAloudBtn.style.background = 'linear-gradient(135deg, #6a11cb, #2575fc)';
        }
    }
    
    // Initialize audio button
    if (readAloudBtn) {
        readAloudBtn.addEventListener('click', playCustomLetterAudio);
    }
    
    // ========== BACKGROUND MUSIC CONTROL ==========
    function stopBackgroundMusicCompletely() {
        if (bgMusic && !bgMusic.paused) {
            bgMusicWasPlaying = true;
            bgMusicWasPaused = false;
            
            gsap.to(bgMusic, {
                volume: 0,
                duration: 1.5,
                ease: "power2.inOut",
                onComplete: () => {
                    bgMusic.pause();
                    bgMusic.currentTime = 0;
                    console.log("Background music completely stopped for video");
                }
            });
        } else if (bgMusic && bgMusic.paused) {
            bgMusicWasPlaying = false;
            bgMusicWasPaused = true;
        }
    }
    
    function resumeBackgroundMusic() {
        if (bgMusic && bgMusicWasPlaying && !isVideoPlaying) {
            bgMusic.currentTime = 0;
            bgMusic.volume = 0;
            bgMusic.play().then(() => {
                gsap.to(bgMusic, {
                    volume: originalBgVolume,
                    duration: 2,
                    ease: "power2.inOut",
                    onComplete: () => {
                        console.log("Background music resumed");
                    }
                });
            }).catch(e => {
                console.log("Couldn't resume background music:", e);
            });
        }
    }
    
    // ========== PAGE 7 NAVIGATION ==========
    if (finalPageBtn) {
        finalPageBtn.addEventListener('click', function() {
            if (isAudioPlaying) {
                pauseCustomAudio();
            }
            
            createHeartExplosion();
            playSound(magicSound, 0.8);
            
            gsap.to(this, {
                scale: 0.9,
                duration: 0.2,
                yoyo: true,
                ease: "power2.inOut",
                onComplete: () => {
                    goToPage7();
                }
            });
        });
    }
    
    // ========== PAGE 7: WHY I LOVE YOU ==========
    function goToPage7() {
        page4.classList.add('hidden');
        page7.classList.remove('hidden');
        
        gsap.from(page7, {
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
            ease: "back.out(1.7)"
        });
        
        initPage7();
        createHeartExplosion();
        playSound(magicSound, 0.7);
    }
    
    function initPage7() {
        revealedReasons = 0;
        if (reasonsCount) reasonsCount.textContent = '0';
        if (loveMeterFill) loveMeterFill.style.width = '0%';
        if (loveMeterText) loveMeterText.textContent = 'Starting...';
        isSecretRevealed = false;
        if (secretMessage) secretMessage.classList.add('hidden');
        
        if (reasonsGrid) reasonsGrid.innerHTML = '';
        
        categories.forEach(cat => cat.classList.remove('active'));
        const allCategory = document.querySelector('.category[data-category="all"]');
        if (allCategory) allCategory.classList.add('active');
        currentCategory = 'all';
        
        createFloatingReasonHearts();
        
        for (let i = 0; i < 3; i++) {
            revealReason();
        }
        
        updateLoveMeter();
    }
    
    function createFloatingReasonHearts() {
        const container = document.querySelector('.reasons-bg-hearts');
        if (!container) return;
        
        container.innerHTML = '';
        const hearts = ['💖', '💕', '💗', '💓', '💞', '💘'];
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'absolute';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.opacity = '0.1';
            heart.style.animation = `floatAround ${Math.random() * 20 + 20}s linear infinite`;
            heart.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(heart);
        }
    }
    
    function revealReason() {
        if (revealedReasons >= totalReasons) return;
        
        let availableReasons = reasonsDatabase[currentCategory];
        if (availableReasons.length === 0) {
            availableReasons = reasonsDatabase.all;
        }
        
        const randomIndex = Math.floor(Math.random() * availableReasons.length);
        const reasonText = availableReasons[randomIndex];
        availableReasons.splice(randomIndex, 1);
        
        if (!reasonsGrid) return;
        
        const reasonCard = document.createElement('div');
        reasonCard.className = 'reason-card';
        reasonCard.dataset.category = currentCategory;
        
        let displayCategory = currentCategory;
        if (currentCategory === 'all') {
            for (const cat in reasonsDatabase) {
                if (cat !== 'all' && reasonsDatabase[cat].includes(reasonText)) {
                    displayCategory = cat;
                    break;
                }
            }
        }
        
        reasonCard.innerHTML = `
            <div class="reason-number">${revealedReasons + 1}</div>
            <div class="reason-text">${reasonText}</div>
            <div class="reason-category">${displayCategory}</div>
        `;
        
        reasonsGrid.appendChild(reasonCard);
        
        setTimeout(() => {
            reasonCard.classList.add('revealed');
            
            gsap.to(reasonCard, {
                y: -10,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });
            
            playSound(magicSound, 0.3);
        }, 100);
        
        revealedReasons++;
        if (reasonsCount) reasonsCount.textContent = revealedReasons;
        
        updateLoveMeter();
        
        if (revealedReasons > 4) {
            reasonsGrid.scrollTop = reasonsGrid.scrollHeight;
        }
        
        if (revealedReasons === 50 && !isSecretRevealed) {
            setTimeout(() => {
                if (secretBtn) secretBtn.click();
            }, 1000);
        }
    }
    
    function updateLoveMeter() {
        if (!loveMeterFill || !loveMeterText) return;
        
        const percentage = Math.min((revealedReasons / totalReasons) * 100, 100);
        
        gsap.to(loveMeterFill, {
            width: percentage + '%',
            duration: 1,
            ease: "power2.out"
        });
        
        let meterText = '';
        if (percentage < 20) meterText = 'Starting... 💕';
        else if (percentage < 40) meterText = 'Falling in Love 💖';
        else if (percentage < 60) meterText = 'Deeply in Love 💗';
        else if (percentage < 80) meterText = 'Completely in Love 💓';
        else if (percentage < 100) meterText = 'Madly in Love 💞';
        else meterText = 'INFINITE LOVE 💘';
        
        loveMeterText.textContent = meterText;
        
        if (percentage >= 80) {
            loveMeterText.style.textShadow = '0 0 10px rgba(255, 0, 102, 0.8)';
        }
    }
    
    function revealSecret() {
        if (!secretMessage || !secretBtn) return;
        
        secretMessage.classList.remove('hidden');
        secretBtn.innerHTML = '<i class="fas fa-unlock"></i><span>My Biggest Reason Revealed!</span>';
        secretBtn.style.background = 'linear-gradient(135deg, #4CAF50, #2E7D32)';
        secretBtn.style.animation = 'none';
        secretBtn.disabled = true;
        secretBtn.style.cursor = 'default';
        secretBtn.style.opacity = '0.8';
        
        isSecretRevealed = true;
        
        gsap.fromTo(secretMessage, 
            {
                opacity: 0,
                scale: 0.5,
                y: 50,
                rotation: -10
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                rotation: 0,
                duration: 1.2,
                ease: "back.out(1.7)"
            }
        );
        
        createSecretHeartExplosion();
        playSound(magicSound, 0.8);
        
        if (loveMeterText) {
            loveMeterText.textContent = 'COMPLETE LOVE 💘';
            loveMeterText.style.textShadow = '0 0 15px rgba(255, 0, 102, 1)';
        }
    }
    
    function createSecretHeartExplosion() {
        const specialHearts = ['💘', '💝', '💖', '💗', '💓', '💞'];
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.textContent = specialHearts[Math.floor(Math.random() * specialHearts.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.left = centerX + 'px';
            heart.style.top = centerY + 'px';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            document.body.appendChild(heart);
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 100;
            const duration = Math.random() * 2 + 1;
            
            gsap.to(heart, {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: 0,
                rotation: Math.random() * 720,
                duration: duration,
                ease: "power2.out",
                onComplete: () => heart.remove()
            });
        }
    }
    
    // ========== PAGE 7 EVENT LISTENERS ==========
    if (revealHeart) {
        revealHeart.addEventListener('click', function() {
            gsap.to(this, {
                scale: 0.8,
                duration: 0.2,
                yoyo: true,
                ease: "power2.inOut",
                onComplete: () => {
                    revealReason();
                }
            });
        });
    }
    
    categories.forEach(category => {
        category.addEventListener('click', function() {
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            
            if (reasonsGrid) reasonsGrid.innerHTML = '';
            revealedReasons = 0;
            if (reasonsCount) reasonsCount.textContent = '0';
            
            for (let i = 0; i < 3; i++) {
                revealReason();
            }
            
            playSound(magicSound, 0.2);
        });
    });
    
    if (secretBtn) {
        secretBtn.addEventListener('click', revealSecret);
    }
    
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', function() {
            page7.classList.add('hidden');
            page4.classList.remove('hidden');
            playSound(magicSound, 0.5);
        });
    }
    
    // This button from Page 7 goes to Page 5 (Video page)
    if (nextToPage5Btn) {
        nextToPage5Btn.addEventListener('click', function() {
            createHeartExplosion();
            playSound(magicSound, 0.8);
            
            gsap.to(this, {
                scale: 0.9,
                duration: 0.2,
                yoyo: true,
                ease: "power2.inOut",
                onComplete: () => {
                    goToPage5();
                }
            });
        });
    }
    
    // ========== PAGE 5: VIDEO PAGE ==========
    function goToPage5() {
        page7.classList.add('hidden');
        page5.classList.remove('hidden');
        
        gsap.from(page5, {
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
            ease: "back.out(1.7)"
        });
        
        initPage5();
        createHeartExplosion();
        playSound(magicSound, 0.7);
    }
    
    function initPage5() {
        if (ourVideo) {
            ourVideo.currentTime = 0;
            ourVideo.volume = 1;
            ourVideo.pause();
            isVideoPlaying = false;
        }
        
        if (videoOverlay) {
            videoOverlay.classList.remove('hidden');
        }
        
        const customControls = document.getElementById('customControls');
        if (customControls) {
            customControls.classList.remove('visible');
        }
        
        if (watchCountElement) {
            const savedCount = localStorage.getItem('videoWatchCount') || 0;
            watchCount = parseInt(savedCount);
            watchCountElement.textContent = watchCount;
        }
        
        if (ourVideo && durationElement) {
            ourVideo.addEventListener('loadedmetadata', function() {
                const duration = Math.floor(ourVideo.duration);
                const minutes = Math.floor(duration / 60);
                const seconds = duration % 60;
                if (durationElement) {
                    durationElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                }
                const videoDuration = document.getElementById('videoDuration');
                if (videoDuration) {
                    videoDuration.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                }
            });
        }
        
        setupVideoControls();
    }
    
    function setupVideoControls() {
        if (playVideoBtn) {
            playVideoBtn.addEventListener('click', function() {
                stopBackgroundMusicCompletely();
                
                setTimeout(() => {
                    startVideoPlayback();
                }, 500);
            });
        }
        
        if (ourVideo) {
            ourVideo.addEventListener('click', function() {
                if (!isVideoPlaying) {
                    stopBackgroundMusicCompletely();
                    setTimeout(() => {
                        toggleVideoPlayback();
                    }, 300);
                } else {
                    toggleVideoPlayback();
                }
            });
        }
        
        if (videoPlayPause) {
            videoPlayPause.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleVideoPlayback();
            });
        }
        
        if (volumeBtn && volumeSlider && ourVideo) {
            volumeBtn.addEventListener('click', function() {
                if (ourVideo.volume > 0) {
                    ourVideo.volume = 0;
                    volumeSlider.value = 0;
                    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                } else {
                    ourVideo.volume = 1;
                    volumeSlider.value = 1;
                    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                }
            });
            
            volumeSlider.addEventListener('input', function() {
                ourVideo.volume = this.value;
                volumeBtn.innerHTML = ourVideo.volume > 0 ? 
                    '<i class="fas fa-volume-up"></i>' : 
                    '<i class="fas fa-volume-mute"></i>';
            });
        }
        
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleFullscreen();
            });
        }
        
        const progressContainer = document.querySelector('.progress-container');
        if (progressContainer && ourVideo && videoProgressBar) {
            progressContainer.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                ourVideo.currentTime = percent * ourVideo.duration;
            });
        }
        
        if (ourVideo && videoProgressBar && currentTimeElement) {
            ourVideo.addEventListener('timeupdate', function() {
                if (!isNaN(ourVideo.duration)) {
                    const percent = (ourVideo.currentTime / ourVideo.duration) * 100;
                    videoProgressBar.style.width = percent + '%';
                    
                    const currentMinutes = Math.floor(ourVideo.currentTime / 60);
                    const currentSeconds = Math.floor(ourVideo.currentTime % 60);
                    currentTimeElement.textContent = 
                        `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
                }
            });
        }
        
        if (ourVideo) {
            ourVideo.addEventListener('ended', function() {
                isVideoPlaying = false;
                incrementWatchCount();
                showVideoCompletionMessage();
                
                setTimeout(() => {
                    resumeBackgroundMusic();
                }, 2000);
            });
        }
        
        // ========== FIXED: VIDEO NEXT BUTTON GOES TO PAGE 8 ==========
        if (videoNextBtn) {
            // Remove any existing listeners
            videoNextBtn.replaceWith(videoNextBtn.cloneNode(true));
            const freshVideoNextBtn = document.getElementById('videoNextBtn');
            
            freshVideoNextBtn.addEventListener('click', function() {
                console.log('🎬 Video Next button clicked - Navigating to Page 8');
                
                if (ourVideo && !ourVideo.paused) {
                    ourVideo.pause();
                    isVideoPlaying = false;
                }
                
                createHeartExplosion();
                playSound(magicSound, 0.8);
                
                gsap.to(this, {
                    scale: 0.9,
                    duration: 0.2,
                    yoyo: true,
                    ease: "power2.inOut",
                    onComplete: () => {
                        goToPage8();
                    }
                });
            });
            
            console.log('✅ Video Next button listener added - will go to Page 8');
        } else {
            console.error('❌ Video Next button not found!');
        }
        
        if (videoPrevBtn) {
            videoPrevBtn.addEventListener('click', function() {
                goBackToPage7();
            });
        }
        
        const videoPlayer = document.getElementById('videoPlayer');
        const customControls = document.getElementById('customControls');
        if (videoPlayer && customControls) {
            videoPlayer.addEventListener('mouseenter', function() {
                if (videoOverlay && !videoOverlay.classList.contains('hidden')) return;
                customControls.classList.add('visible');
            });
            
            videoPlayer.addEventListener('mouseleave', function() {
                customControls.classList.remove('visible');
            });
        }
        
        if (ourVideo) {
            ourVideo.addEventListener('pause', function() {
                isVideoPlaying = false;
            });
        }
    }
    
    function startVideoPlayback() {
        if (!ourVideo) return;
        
        const playPromise = ourVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                if (videoOverlay) videoOverlay.classList.add('hidden');
                
                const customControls = document.getElementById('customControls');
                if (customControls) customControls.classList.add('visible');
                
                if (videoPlayPause) videoPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
                
                isVideoPlaying = true;
                incrementWatchCount();
                
                console.log("Video playing - background music is stopped");
                
            }).catch(error => {
                console.error("Video play failed:", error);
                alert("Couldn't play the video. Please click the page first, then try again.");
                resumeBackgroundMusic();
            });
        }
    }
    
    function toggleVideoPlayback() {
        if (!ourVideo || !videoPlayPause) return;
        
        if (ourVideo.paused) {
            if (!isVideoPlaying) {
                stopBackgroundMusicCompletely();
            }
            
            ourVideo.play();
            videoPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
            isVideoPlaying = true;
        } else {
            ourVideo.pause();
            videoPlayPause.innerHTML = '<i class="fas fa-play"></i>';
            isVideoPlaying = false;
        }
    }
    
    function toggleFullscreen() {
        const videoPlayer = document.getElementById('videoPlayer');
        
        if (!document.fullscreenElement) {
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            } else if (videoPlayer.webkitRequestFullscreen) {
                videoPlayer.webkitRequestFullscreen();
            } else if (videoPlayer.msRequestFullscreen) {
                videoPlayer.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
    
    function incrementWatchCount() {
        watchCount++;
        if (watchCountElement) {
            watchCountElement.textContent = watchCount;
        }
        localStorage.setItem('videoWatchCount', watchCount);
    }
    
    function showVideoCompletionMessage() {
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 30px;
                border-radius: 20px;
                z-index: 10000;
                text-align: center;
                max-width: 400px;
                backdrop-filter: blur(10px);
                border: 3px solid #ff4d8d;
                animation: messagePop 0.5s ease;
            ">
                <div style="font-size: 3rem; margin-bottom: 15px;">🎬</div>
                <h3 style="margin: 0 0 10px 0; color: #ffb3c6;">Our Story Continues...</h3>
                <p style="margin: 0; line-height: 1.5;">
                    Every moment with you is my favorite scene.<br>
                    This is just the beginning of our forever story.
                </p>
                <div style="
                    margin-top: 20px;
                    padding: 10px;
                    background: rgba(255, 77, 141, 0.2);
                    border-radius: 10px;
                    font-size: 0.9rem;
                ">
                    <i class="fas fa-redo" style="margin-right: 5px;"></i>
                    Watch again? Just click the play button!
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    margin-top: 20px;
                    background: #ff4d8d;
                    color: white;
                    border: none;
                    padding: 10px 25px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: bold;
                ">
                    Close
                </button>
            </div>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            if (message.parentElement) {
                message.remove();
            }
        }, 8000);
    }
    
    function goBackToPage7() {
        if (ourVideo) {
            ourVideo.pause();
            ourVideo.currentTime = 0;
            isVideoPlaying = false;
        }
        
        page5.classList.add('hidden');
        page7.classList.remove('hidden');
        playSound(magicSound, 0.5);
        
        resumeBackgroundMusic();
    }
    
    // Fullscreen change event
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
    
    function handleFullscreenChange() {
        if (fullscreenBtn) {
            if (document.fullscreenElement) {
                fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
            } else {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        }
    }
    
    // ========== PAGE 8: VALENTINE'S PROPOSAL - FIXED VERSION ==========
    function goToPage8() {
        console.log('💘 goToPage8() called - Navigating to Proposal Page');
        
        if (!page8) {
            console.error('❌ CRITICAL: page8 element is null! Check HTML id="page8"');
            alert('Error: Page 8 not found. Please check the HTML.');
            return;
        }
        
        resumeBackgroundMusic();
        
        page5.classList.add('hidden');
        console.log('✅ Page 5 hidden');
        
        page8.classList.remove('hidden');
        console.log('✅ Page 8 shown - hidden class removed');
        
        gsap.from(page8, {
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
            ease: "back.out(1.7)"
        });
        
        initPage8();
        
        createHeartExplosion();
        playSound(magicSound, 0.7);
        
        console.log('🎉 Page 8 should now be visible!');
    }
    
    function initPage8() {
        console.log('initPage8() called - Initializing Proposal Page');
        
        const yesBtn = document.getElementById('yesBtn');
        const successMessage = document.getElementById('successMessage');
        const proposalBackBtn = document.getElementById('proposalBackBtn');
        
        console.log('YES Button found:', !!yesBtn);
        console.log('Success Message found:', !!successMessage);
        console.log('Back Button found:', !!proposalBackBtn);
        
        if (successMessage) {
            successMessage.classList.add('hidden');
        }
        
        createProposalBackgroundHearts();
        
        if (yesBtn) {
            yesBtn.replaceWith(yesBtn.cloneNode(true));
            const freshYesBtn = document.getElementById('yesBtn');
            
            freshYesBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('💖 YES button clicked! Showing success message');
                showSuccessMessage();
            });
            
            console.log('✅ YES button event listener added');
        } else {
            console.error('❌ YES button not found!');
        }
        
        if (proposalBackBtn) {
            proposalBackBtn.replaceWith(proposalBackBtn.cloneNode(true));
            const freshBackBtn = document.getElementById('proposalBackBtn');
            
            freshBackBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('⬅️ Back button clicked - going to Page 5');
                goBackToPage5();
            });
            
            console.log('✅ Back button event listener added');
        } else {
            console.error('❌ Back button not found!');
        }
    }
    
    function createProposalBackgroundHearts() {
        const container = document.querySelector('.proposal-bg-hearts');
        if (!container) {
            console.warn('⚠️ .proposal-bg-hearts container not found');
            return;
        }
        
        container.innerHTML = '';
        const hearts = ['💖', '💕', '💗', '💓', '💞', '💘'];
        
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'absolute';
            heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.opacity = '0.2';
            heart.style.animation = `floatProposalHeart ${Math.random() * 15 + 10}s linear infinite`;
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.zIndex = '1';
            container.appendChild(heart);
        }
        
        if (!document.querySelector('#proposalHeartAnimation')) {
            const style = document.createElement('style');
            style.id = 'proposalHeartAnimation';
            style.textContent = `
                @keyframes floatProposalHeart {
                    0% {
                        transform: translateY(100vh) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.3;
                    }
                    90% {
                        opacity: 0.3;
                    }
                    100% {
                        transform: translateY(-100px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    function showSuccessMessage() {
        console.log('🎊 showSuccessMessage() called');
        
        if (!successMessage) {
            console.error('❌ successMessage element not found!');
            return;
        }
        
        stopBackgroundMusicCompletely();
        
        successMessage.classList.remove('hidden');
        console.log('✅ Success message shown');
        
        createHeartBurstAnimation();
        
        playSound(magicSound, 0.8);
        
        createCelebrationEffects();
        
        if (countdownTimer) {
            let countdown = 5;
            countdownTimer.textContent = countdown;
            
            const countdownInterval = setInterval(() => {
                countdown--;
                countdownTimer.textContent = countdown;
                
                gsap.to(countdownTimer, {
                    scale: 1.3,
                    duration: 0.3,
                    yoyo: true,
                    ease: "power2.inOut"
                });
                
                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    showFinalMessage();
                }
            }, 1000);
        }
    }
    
    function createHeartBurstAnimation() {
        const hearts = document.querySelectorAll('.heart-burst');
        
        hearts.forEach((heart, index) => {
            const angle = (Math.random() * Math.PI * 2);
            const distance = 100 + Math.random() * 100;
            
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            heart.style.setProperty('--tx', `${tx}px`);
            heart.style.setProperty('--ty', `${ty}px`);
            
            heart.style.animation = 'none';
            void heart.offsetWidth;
            heart.style.animation = `burstOut 1.5s ease-out ${index * 0.2}s forwards`;
        });
    }
    
    function createCelebrationEffects() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.innerHTML = ['💖', '💕', '💗', '💓', '💞', '🎉', '✨', '🌟'][Math.floor(Math.random() * 8)];
            confetti.style.position = 'fixed';
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-50px';
            confetti.style.zIndex = '1001';
            confetti.style.pointerEvents = 'none';
            confetti.style.opacity = '0.9';
            document.body.appendChild(confetti);
            
            gsap.to(confetti, {
                y: window.innerHeight + 100,
                rotation: Math.random() * 720,
                x: (Math.random() - 0.5) * 200,
                duration: Math.random() * 3 + 2,
                ease: "power1.in",
                onComplete: () => confetti.remove()
            });
        }
        
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.background = 'rgba(255, 255, 255, 0.9)';
        flash.style.zIndex = '999';
        flash.style.pointerEvents = 'none';
        document.body.appendChild(flash);
        
        gsap.to(flash, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => flash.remove()
        });
    }
    
    function showFinalMessage() {
        const finalMessage = document.createElement('div');
        finalMessage.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #ff0066, #ff4d8d);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                color: white;
                text-align: center;
                padding: 2rem;
                animation: fadeIn 0.5s ease;
            ">
                <div style="font-size: 5rem; margin-bottom: 2rem; animation: bounce 1s ease-in-out infinite;">💖</div>
                <h1 style="font-family: 'Dancing Script', cursive; font-size: 4rem; margin-bottom: 1rem;">
                    Forever Yours!
                </h1>
                <p style="font-size: 1.5rem; margin-bottom: 2rem; max-width: 600px; line-height: 1.6;">
                    Thank you for being my Valentine, Zizu.<br>
                    This is just the beginning of our beautiful journey together.
                </p>
                <div style="
                    background: rgba(255, 255, 255, 0.2);
                    padding: 1.5rem;
                    border-radius: 20px;
                    margin-top: 2rem;
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                ">
                    <p style="font-size: 1.2rem; margin: 0;">
                        <i class="fas fa-heart" style="margin-right: 10px;"></i>
                        Made with all my love for you
                    </p>
                    <p style="font-size: 1rem; opacity: 0.9; margin-top: 10px;">
                        - Bitanem
                    </p>
                </div>
                <button onclick="location.reload()" style="
                    margin-top: 3rem;
                    background: white;
                    color: #ff0066;
                    border: none;
                    padding: 15px 40px;
                    border-radius: 30px;
                    font-size: 1.2rem;
                    font-weight: bold;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s ease;
                ">
                    <i class="fas fa-redo"></i>
                    Start Over
                </button>
            </div>
        `;
        
        document.body.appendChild(finalMessage);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    function goBackToPage5() {
        console.log('⬅️ goBackToPage5() called');
        
        if (ourVideo) {
            ourVideo.pause();
            ourVideo.currentTime = 0;
            isVideoPlaying = false;
        }
        
        page8.classList.add('hidden');
        page5.classList.remove('hidden');
        playSound(magicSound, 0.5);
    }
    
    const proposalStyle = document.createElement('style');
    proposalStyle.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(proposalStyle);
    
    // ========== HELPER FUNCTIONS ==========
    function goToPage3() {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        
        gsap.from(page3, {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: "back.out(1.7)"
        });
        
        initPage3();
        createHeartExplosion();
        playSound(magicSound, 0.7);
    }
    
    function createCameraFlash() {
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.background = 'white';
        flash.style.opacity = '0';
        flash.style.zIndex = '1000';
        flash.style.pointerEvents = 'none';
        document.body.appendChild(flash);
        
        gsap.to(flash, {
            opacity: 0.9,
            duration: 0.1,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(flash, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => flash.remove()
                });
            }
        });
    }
    
    function createFloatingHearts() {
        const backgroundHearts = document.querySelector('.background-hearts');
        if (!backgroundHearts) return;
        
        const hearts = ['💖', '💗', '💓', '💕', '💞', '💘'];
        
        for (let i = 0; i < 12; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.animationDuration = (Math.random() * 10 + 15) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.opacity = Math.random() * 0.3 + 0.1;
            backgroundHearts.appendChild(heart);
        }
    }
    
    function createHeartExplosion() {
        const hearts = ['💖', '💗', '💓', '💕', '💞', '💘'];
        
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = '25px';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            document.body.appendChild(heart);
            
            gsap.to(heart, {
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 800,
                rotation: Math.random() * 720,
                opacity: 0,
                duration: 2,
                ease: "power2.out",
                onComplete: () => heart.remove()
            });
        }
    }
    
    function setupBackgroundMusic() {
        document.body.addEventListener('click', function firstInteraction() {
            if (!musicStarted && bgMusic) {
                bgMusic.volume = 0.3;
                bgMusic.play().then(() => {
                    musicStarted = true;
                    originalBgVolume = 0.5;
                    gsap.to(bgMusic, {
                        volume: originalBgVolume,
                        duration: 3,
                        ease: "power2.in"
                    });
                    console.log("Background music started");
                }).catch(() => {
                    musicStarted = false;
                    console.log("Background music could not start automatically");
                });
            }
            document.body.removeEventListener('click', firstInteraction);
        }, { once: true });
    }
    
    function playSound(soundElement, volume) {
        if (!soundElement) return;
        soundElement.currentTime = 0;
        soundElement.volume = volume;
        soundElement.play().catch(e => console.log("Sound error:", e));
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            if (!page3.classList.contains('hidden')) {
                e.preventDefault();
                revealPhoto();
            } else if (!page7.classList.contains('hidden')) {
                e.preventDefault();
                revealReason();
            } else if (!page5.classList.contains('hidden')) {
                e.preventDefault();
                toggleVideoPlayback();
            }
        }
    });
    
    console.log('❤️ Valentine Website loaded successfully! All pages ready.');
    console.log('📋 Page navigation flow: 1 → 2 → 3 → 4 → 7 → 5 → 8');
});