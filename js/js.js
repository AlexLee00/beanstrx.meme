$(function () {
  var $menuPc = $("header .gnb_pc .menu-list"),
    $menuMobile = $("header .gnb_m .menu-list"),
    $contents = $(".scroll"),
    $doc = $("html, body");

  // 스크롤 이벤트 처리
  $(window).scroll(function () {
    var scltop = $(window).scrollTop();

    $.each($contents, function (idx, item) {
      var $target = $contents.eq(idx),
        i = $target.index(),
        targetTop = $target.offset().top - 800;

      if (targetTop <= scltop) {
        $menuPc.removeClass("on");
        $menuPc.eq(idx).addClass("on");

        $menuMobile.removeClass("on");
        $menuMobile.eq(idx).addClass("on");
      }
      if (!(200 <= scltop)) {
        $menuPc.removeClass("on");
        $menuMobile.removeClass("on");
      }
    });

    if (scltop > 450) {
      $(".btn_top").stop().fadeIn();
    } else {
      $(".btn_top").stop().fadeOut();
    }
  });

  // 상단으로 이동 버튼
  $(".btn_top").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 800);
  });

  // 메뉴 열기 및 닫기
  $(document).on("click", ".js-menu_toggle.closed", function (e) {
    e.preventDefault();
    $(".list_load, .list_item").stop();
    $(this).removeClass("closed").addClass("opened");
    $(".side_menu").css({ right: "0px" });

    var count = $(".list_item").length;
    $(".list_load").slideDown(count * 0.6 * 100);
    $(".list_item").each(function (i) {
      var thisLI = $(this);
      setTimeout(function () {
        thisLI.css({
          opacity: "1",
          "margin-right": "0",
        });
      }, 100 * i);
    });
  });

  $(document).on("click", ".js-menu_toggle.opened", function (e) {
    e.preventDefault();
    $(".list_load, .list_item").stop();
    $(this).removeClass("opened").addClass("closed");
    $(".side_menu").css({ right: "-100%" });

    var count = $(".list_item").length;
    $(".list_item").css({
      opacity: "0",
      "margin-right": "-20px",
    });
    $(".list_load").slideUp(300);
  });

  // 헤더 배경 처리
  $(window).scroll(function () {
    var windTop = $(this).scrollTop();
    if (windTop > 100) {
      $("header").removeClass().addClass("bg-blur");
    } else {
      $("header").removeClass().addClass("bg-transparent");
    }
  });

  $("header .side_menu .lang li a, header .gnb_m li a").click(function () {
    $("header .side_menu .js-menu_toggle").trigger("click");
  });

  // Swiper 설정
  var swiper = new Swiper(".eventSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      360: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  // 이미지 클릭 시 링크 복사 기능 추가
  $("#copy-image").click(function () {
    var linkToCopy = "TQCfza5xo7srwPsYvdpQgYbgQAUWcAcjSa"; // 복사할 링크
    var tempInput = $("<textarea>");
    $("body").append(tempInput);
    tempInput.val(linkToCopy).select();
    document.execCommand("copy");
    tempInput.remove();

    // 알림 표시 (선택 사항)
    alert(linkToCopy);
  });

  var mySwiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000, // 3초마다 슬라이드
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        // 데스크탑에서는 두 개씩 보여줌
        slidesPerView: 2,
      },
    },
  });
});
