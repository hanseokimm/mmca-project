
window.onload = function() {
    const header = document.querySelector('header');
    const prevScrollTop = 0;

    if($(window).scrollTop() != 0) {
        header.classList.toggle("active", true);
    }

    document.addEventListener("scroll", function(){
        const nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
        
        // 스크롤 방향 내리고올릴때 -> 헤더에 active 클래스 추가, 다시 맨위도달 -> active 클래스 삭제
        if (nowScrollTop > prevScrollTop) { 
            header.classList.add("active");
            scrollBox.style.opacity = "1";
        } 
        else if (prevScrollTop < prevScrollTop) { 
            header.classList.add("active");
            scrollBox.style.opacity = "1";
        }
        else {
            header.classList.remove("active");
            depthBg.classList.remove("active");
            for(let i=0; i<hDepth.length; i++) {
                hDepth[i].classList.remove("active");
            }
            scrollBox.style.opacity = "0";
        }
    });
    header.addEventListener("mouseover", function () {
        header.classList.toggle("active", true);
    });
    header.addEventListener("mouseout", function () {
        if($(window).scrollTop() == 0) {
            header.classList.toggle("active", false);
        }
    });   

    const hMenu = document.querySelector(".h-menu");
    const hDepth = document.querySelectorAll(".depth");
    const depthBg = document.querySelector(".depth-bg");
    
    hMenu.addEventListener("mouseover", function() {
        depthBg.classList.add("active");
        for(let i=0; i<hDepth.length; i++) {
            hDepth[i].classList.add("active");
        }
    });
    hMenu.addEventListener("mouseout", function() {
        depthBg.classList.remove("active");
        for(let i=0; i<hDepth.length; i++) {
            hDepth[i].classList.remove("active");
        }
    });
    
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach((langBtn) => {
        langBtn.addEventListener("click", function() {
            this.classList.toggle("open");
        });
    });

    const mBtn = document.querySelector(".m-btn");
    const closeBtn = document.querySelector(".close-btn");
    const mWrap = document.querySelector(".m-wrap");

    mBtn.addEventListener("click", function() {
        mWrap.classList.add("open");
        scrollBox.style.display = 'none';
        if(mWrap.classList.contains("open")) {
            document.body.style.overflow = 'hidden'; //뒷배경 비활성화
        }
    });
    closeBtn.addEventListener("click", function() {
        mWrap.classList.remove("open");
        scrollBox.style.display = 'flex';
        document.body.style.overflow = 'auto'; //뒷배경 활성화
    });


    const mNavs = document.querySelectorAll(".m-nav");
    const mDepths = document.querySelectorAll(".m-depth");
    mNavs.forEach((mNav, index) => {
        mNav.addEventListener("click", function() {
            mNavs.forEach(mNav => mNav.classList.remove("open"));
            this.classList.add("open");
            mDepths.forEach(mDepth => mDepth.classList.remove("open"));
            mDepths[index].classList.add("open");
        });
    });

    //main - display-sec
    const displayMenu = document.querySelectorAll(".display-sec .tit-box li");
    displayMenu.forEach((li) => {
        li.addEventListener("click", function() {
            displayMenu.forEach(li => li.classList.remove("active"));
            li.classList.add("active");
        });
    });

    //quick-menu
    const quickBox = document.querySelector(".quick-box");
    const topBox = document.querySelector(".top-box");
    const scrollBox = document.querySelector(".scroll-box");
    quickBox.addEventListener("click", function() {
        quickBox.classList.toggle("open");
    })
    topBox.addEventListener("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 400);
    });


    // footer
    const fBtn = document.querySelector(".f-btn");

    fBtn.addEventListener("click", function() {
        fBtn.classList.toggle("open");
    })

}
    
