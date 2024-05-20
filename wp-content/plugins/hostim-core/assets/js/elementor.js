(function ($, elementor) {
    "use strict";

    var Hostim = {

        init: function () {

            var widgets = {
                'hostim-domain-form.default'            : Hostim.Domain,
                'hostim-testimonial.default'            : Hostim.SwiperControls,
                'hostim-blog.default'                   : Hostim.BlogPostCarousel,
                'hostim-logo-carousel.default'          : Hostim.LogoCarousel,
                'hostim-games.default'                  : Hostim.SwiperControls,
                'hostim_gaming_isotope'                 : Hostim.IsotoControls,
                'hostim-pricing.default'                : Hostim.SwiperControls,
                'hostim-slider.default'                 : Hostim.HeroSlider,
                'hostim-services.default'               : Hostim.SwiperControls,
                'hostim_support_chat.default'           : Hostim.SupportChat,
                'hostim-pricing-slider.default'         : Hostim.VpsSlider,
                'hostim_pricing_slider3'                : Hostim.SwiperControls,
                'hostim-data-center-location.default'   : Hostim.Locations,
                'hostim_table_title.default'            : Hostim.TableTabsTitle,
            };
            $.each(widgets, function (widget, callback) {
                elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
            });
        },

        LogoCarousel: function ($scope) {
            let carousel_1 = $scope.find('.vps_scripts_slider_wrapper');
            let carousel_2 = $scope.find('.operating-systems');
            let carousel_3 = $scope.find('.qty-brand-slider');
            if (carousel_3.length > 0) {
                const brandSlider = document.querySelector(".qty-brand-slider");
                if (brandSlider) {
                    const brandSliderInit = new Swiper(brandSlider, {
                        loop: true,
                        slidesPerView: 2,
                        centeredSlides: true,
                        centeredSlidesBounds: true,
                        speed: 5000,
                        spaceBetween: 16,
                        autoplay: {
                            delay: 1,
                            disableOnInteraction: false,
                        },
                        breakpoints: {
                            576: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 5,
                            },
                            1200: {
                                slidesPerView: 6,
                            },
                            1400: {
                                slidesPerView: 7,
                            },
                            1600: {
                                slidesPerView: 8,
                            },
                            1920: {
                                slidesPerView: 9,
                            },
                        },
                    });
                }
                /**
                 * Circle Button Text
                 */
                const circleText = document.querySelectorAll(".circle-btn__text");
                circleText.forEach((e) => {
                    e.innerHTML = e.textContent.replace(/\S/g, "<span>$&</span>");
                });
                const circleTextElement = document.querySelectorAll(".circle-btn__text span");
                for (let i = 0; i < circleTextElement.length; i++) {
                    circleTextElement[i].style.transform = "rotate(" + i * 18 + "deg)";
                }
                /**
                 * Selected Pricing Button
                 */
                var selectedBtn = document.querySelectorAll(".select-pricing-btn");

                selectedBtn.forEach(function (item) {
                    item.addEventListener("click", function () {
                        // Add "active" class to the clicked item
                        item.classList.add("active");

                        // Remove "active" class from sibling items
                        selectedBtn.forEach(function (sibling) {
                            if (sibling !== item) {
                                sibling.classList.remove("active");
                            }
                        });
                    });
                });
            }
            if (carousel_1.length > 0 || carousel_2.length > 0) {
                var swiper_container = $(".swiper");
                if (swiper_container.length) {
                    swiper_container.each(function () {
                        var t = $(this),
                            i = ($(this).attr("id"), $(this).data("perpage") || 1),
                            a = $(this).data("loop"),
                            e = $(this).data("speed") || 1000,
                            o = $(this).data("space") || 0,
                            l = $(this).data("effect"),
                            c = $(this).data("center"),
                            ef = $(this).data("effect") || 'slide',
                            pl = $(this).data("autoplay"),
                            delay = $(this).data("delay") || 5000,
                            nex = $(this).data("next"),
                            pre = $(this).data("prev"),
                            pag = $(this).data("pagination"),
                            pagtype = $(this).data("paginationtype"),
                            d = $(this).data("direction") || "horizontal",
                            r = $(this).data("breakpoints");
                        new Swiper(t, {
                            slidesPerView: i,
                            direction: d,
                            spaceBetween: o,
                            loop: a,
                            speed: e,
                            breakpoints: r,
                            centeredSlides: c,
                            autoplay: {
                                delay: delay
                            },
                            effect: ef,
                            fadeEffect: {
                                crossFade: true
                            },
                            pagination: {
                                el: pag,
                                type: pagtype,
                                clickable: !0
                            },
                            navigation: {
                                nextEl: nex,
                                prevEl: pre
                            }
                        })
                    })
                    swiper_container.hover(function () {
                        (this).swiper.autoplay.stop();
                    }, function () {
                        (this).swiper.autoplay.start();
                    });

                }
            }
        },

        TableTabsTitle: function ($scope) {


            $(".crm-monthly").each(function () {
                $(this).on("click", function () {
                    $(this).parents(".crm-pricing-switch-wrapper").find(".crm-checkbox-switch").prop("checked", false);
                });
            });
            $(".crm-yearly").each(function () {
                $(this).on("click", function () {
                    $(this).parents(".crm-pricing-switch-wrapper").find(".crm-checkbox-switch").prop("checked", true);
                });
            });
            $(".crm-pricing-switch").each(function () {
                $(this).on("click", function () {
                    var isBoxChecked = $(this).find(".crm-checkbox-switch").is(":checked");

                    if (isBoxChecked !== true) {
                        $(this).parents(".table").find(".crm_monthly_price").show();
                        $(this).parents(".table").find(".crm_yearly_price").hide();
                    } else {
                        $(this).parents(".table").find(".crm_monthly_price").hide();
                        $(this).parents(".table").find(".crm_yearly_price").show();
                    }
                });
            });

        },

        SupportChat: function ($scope) {

            let chattingSlider = $scope.find('.mn-chatting-slider');

            if ( chattingSlider.length > 0  ) {
                const mnChattingSlider = new Swiper(".mn-chatting-slider", {
                    loop: true,
                    autoplay: true,
                    slidesPerView: 3,
                    centeredSlides: true,
                    direction: "vertical"
                });
            }

        },


        Locations: function ($scope) {

            let dataCenter = $scope.find('.mn-data-center .data-center-pointer');
            if ( dataCenter.length > 0  ) {
                dataCenter.each(function () {
                    $(this).on('mouseenter', function () {
                        $(this).parents('.mn-data-center').find("a.active").removeClass('active');
                        $(this).addClass("active");
                    });
                }); //pricing switch
            }


            // Layout - 05 (Data Tab Locations)
            var $dtc_grid = $('.dtc-grid').isotope({}); // filter items on button click

            $('.data-center-filter-btns').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $dtc_grid.isotope({
                    filter: filterValue
                });
            });
            $(".data-center-filter-btns button").each(function () {
                $(this).on("click", function () {
                    $(this).parent().find("button.active").removeClass("active");
                    $(this).addClass("active");
                });
            }); //showing notice bar

        },


        Domain: function ($scope) {

            var element = $scope.find('#hostim-domain-search');

            /* Domain Check */
            var DomainCheck = {
                submit: function (e) {
                    e.preventDefault();
                    if (e.data.input.val() != '') {
                        var obj = e.data,
                            el = obj.wap.find("#hostim-domain-results"),
                            domainDefault = "themetags.com",
                            basename = obj.input.val() !== "" ? obj.input.val() : domainDefault,
                            ext = obj.select.val() !== "" ? obj.select.val() : '',
                            whmcs_url = obj.whmcs_url.val() !== "" ? obj.whmcs_url.val() : '',
                            extension = DomainCheck.dotExt(obj.input.val());

                    var obj = e.data,
                        el = obj.wap.find("#hostim-domain-results"),
                        domainDefault = "themetags.com",
                        basename = obj.input.val() !== "" ? obj.input.val() : domainDefault,
                        ext = obj.select.val() !== "" ? obj.select.val() : '',
                        whmcs_url = obj.whmcs_url.val() !== "" ? obj.whmcs_url.val() : '',
                        extension = DomainCheck.dotExt(obj.input.val());

                        var domainName = "";
                        if (basename.indexOf('.') > -1) {
                            domainName = basename;
                        } else if (basename.indexOf('.') == -1) {
                            domainName = basename + (ext ? '.' + ext : '.com');
                        }

                        obj.security = obj.form.find("input[name=security]").val();
                        obj.el = el;
                        var domainData = {},
                            domainResultTable = $(
                                '<div id="hostim_result_item" class="hostim-result-domain-box" role="alert"> </div>'
                            ),
                            domainResult = $(
                                '<div class="inner-block-result-item">' +
                                '<div class="spinner hostim-loading-results text-center">' +
                                '<i class="fas fa-spinner fa-spin fa-lg fa-fw"></i>' +
                                '<span> ' + translate.searching +'</span>' +
                                '<span class="sr-only">...</span>' +
                                "</div>"
                            );

                        $.extend(domainData, obj);
                        domainData.domain = domainName;
                        domainData.extension = extension;
                        domainData.whmcs_url = whmcs_url;
                        domainData.el = domainResult;

                        domainResult.data("domain", domainData.domain);

                        if (obj.el.find("#hostim_result_item").length == 0) {
                            obj.el.append(domainResultTable);
                            obj.el.find("#hostim_result_item").append(domainResult);
                        } else {
                            obj.el.find("#hostim_result_item").remove();
                            obj.el.append(domainResultTable);
                            obj.el.find("#hostim_result_item").append(domainResult);
                        }

                        DomainCheck.checkAjax(domainData);
                    }
                    else {
                        var warning_text = document.createElement("span");
                        warning_text.setAttribute('class', 'alert-warning p-2 d-block mt-2');
                        warning_text.innerHTML = translate.enterDomain;
                        element.append(warning_text);

                        setTimeout(function () {
                            warning_text.remove();
                        }, 3000);
                    }
                },

                name: function (domain) {
                    return domain.replace(/^.*\/|\.[^.]*$/g, "");
                },

                dotExt: function (ext) {
                    var fExt,
                        tExt = ext.split(".", 3);

                    if (tExt[1] === undefined) {
                        fExt = "com";
                    } else if (tExt[0] === "www") {
                        fExt = tExt[2];
                    } else {
                        fExt = tExt[1];
                    }

                    return fExt;
                },

                checkAjax: function (obj) {
                    var data = {
                        domain: obj.domain,
                        whmcs_url: obj.whmcs_url,
                        action: "hostim_ajax_search_domain",
                        security: obj.security,
                    };

                    $.ajax({
                        url: hostim_ajax_url,
                        type: "POST",
                        dataType: "json",
                        data: data,
                        success: function (data) {
                            obj.el.find(".spinner").remove();
                            obj.el.append(data.results_html);
                            console.log(data);
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr);
                            console.log(thrownError);
                        },
                    });
                },
            };

            element.is(function () {
                var id = $(this),
                    submitEl = id.find("#hostim-search"),
                    inputEl = id.find("#hostim-domain"),
                    selectEl = id.find("#domainext"),
                    formEl = id.find("#hostim-domain-form"),
                    acEl = id.find('input[name="whmcs_url"]'),
                    data;

                data = {
                    submit: submitEl,
                    input: inputEl,
                    select: selectEl,
                    whmcs_url: acEl,
                    form: formEl,
                    div: id,
                    wap: id,
                };

                submitEl.attr("disabled", false);
                inputEl.keyup(function () {
                    if ($(this).val().length != 0) submitEl.attr("disabled", false);
                    else submitEl.attr("disabled", true);
                });

                submitEl.on("click", data, DomainCheck.submit);
                
                let input_ID = $('#hostim-domain');
                input_ID.on("keypress", data, function (event) { 
                    if (event.key == "Enter") {
                        DomainCheck.submit(event);
                    }
                });

            });

            // Loading Screen
            const loadingClass = $(".loading"),
                removeFLow = $("html,body").css("overflow", "auto");

            if (loadingClass.length === 1) {
                $(window).on("load", function () {
                    loadingClass.fadeOut();
                    removeFLow;
                });
            }

            // Disable Enter Key Domain Search Form
            document.addEventListener('keypress', function (e) {
                if (e.keyCode === 13 || e.which === 13) {
                    e.preventDefault();
                    return false;
                }
            });

        },

        SwiperControls: function () {
            var swiper_container = $(".swiper");
            if (swiper_container.length) {
                swiper_container.each(function () {
                    var t = $(this),
                        i = ($(this).attr("id"), $(this).data("perpage") || 1),
                        a = $(this).data("loop"),
                        e = $(this).data("speed") || 1000,
                        o = $(this).data("space") || 0,
                        l = $(this).data("effect"),
                        c = $(this).data("center"),
                        ef= $(this).data("effect") || 'slide',
                        pl = $(this).data("autoplay"),
                        delay= $(this).data("delay") || 5000,
                        nex = $(this).data("next"),
                        pre = $(this).data("prev"),
                        pag = $(this).data("pagination"),
                        pagtype = $(this).data("paginationtype"),
                        d = $(this).data("direction") || "horizontal",
                        r = $(this).data("breakpoints");
                    new Swiper(t, {
                        slidesPerView: i,
                        direction: d,
                        spaceBetween: o,
                        loop: a,
                        speed: e,
                        breakpoints: r,
                        centeredSlides: c,
                        autoplay: {
                            delay: delay
                        },
                        effect: ef,
                        fadeEffect: {
                            crossFade: true
                        },
                        pagination: {
                            el: pag,
                            type: pagtype,
                            clickable: !0
                        },
                        navigation: {
                            nextEl: nex,
                            prevEl: pre
                        }
                    })
                })
                swiper_container.hover(function () {
                    (this).swiper.autoplay.stop();
                }, function () {
                    (this).swiper.autoplay.start();
                });

            }


        },

        BlogPostCarousel: function () {
            const blogSlider = new Swiper('.hm2-blog-slider', {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }
            });
        },

        IsotoControls: function () {
            $(document).ready(function () {

                // init Isotope
                var $isotop_filter_items = $('.gh-filter-items').isotope({// options
                }); // filter items on button click

                $('.gh-filter-controls').on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $isotop_filter_items.isotope({
                        filter: filterValue
                    });
                }); //replace active class

                $(".gh-filter-controls button").each(function () {
                    $(this).on("click", function () {
                        $(this).parents(".gh-filter-controls").find("button.active").removeClass("active");
                        $(this).addClass("active");
                    });
                });
            });
        },

        HeroSlider: function ($scope) {
            let slider_1 = $scope.find('.hostim_slider');
            let slider_2 = $scope.find('.hm7-hero-slider');
            
            if (slider_1.length > 0) {
                const HeroSlider1 = new Swiper(".hostim_slider", {
                    slidesPerView: 1,
                    autoplay: true,
                    loop: true,
                    
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                });
            }

            if (slider_2.length > 0) {
                const HeroSlider2 = new Swiper(".hm7-hero-slider", {
                    slidesPerView: 1,
                    autoplay: true,
                    loop: true,
                    
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    navigation: {
                        nextEl: '.hm7-hero-slider-next',
                        prevEl: '.hm7-hero-slider-prev'
                    }
                });
            }
        },

        VpsSlider: function ($scope) {
            var vpsRangeSlider = $scope.find('#vps_range_slider');
            if (vpsRangeSlider.length > 0) {
                //Price range slider
                var vps_range_slider = document.querySelector('#vps_range_slider');
                var dataSlide = vps_range_slider.getAttribute('data-slide');

                $(".range-slider").slider({
                    min: 1,
                    max: dataSlide,
                    value: 2
                });
                var rangeInput = $("#vps_range_slider input");
                var checkValue = rangeInput.val();

                for (let i = 1; dataSlide > i; i++) {
                    if (checkValue >= i) {
                        $(".vps_value").hide();
                        $(".vps_" + i + "_value").show();
                        $(".vps_label").removeClass("active");
                        $(".vps_label_" + i).addClass("active");
                    }
                }

                rangeInput.on("change", function () {
                    var checkValue = $(this).val();

                    for (let i = 1; dataSlide >= i; i++) {
                        if (checkValue >= i) {
                            $(".vps_value").hide();
                            $(".vps_" + i + "_value").show();
                            $(".vps_label").removeClass("active");
                            $(".vps_label_" + i).addClass("active");
                        }
                    }

                });
                var rangeTooltip = $("#vps_range_slider .tooltip");
                var layout_4 = $(".vps_labels.layout_4");
                if (rangeTooltip.length > 0) {
                    let marginValue = layout_4.length > 0 ? 3 : 2;
                    var tooltipOffset = rangeTooltip.attr('style').match(/\d+/g);
                    var labelPosition = tooltipOffset[0];
                    $(".price-slider-wrapper .vps_labels span.active").css({
                        marginLeft: tooltipOffset[0] - marginValue + '%'
                    });
                    rangeInput.on("change", function () {
                        var tooltipOffset = rangeTooltip.attr('style').match(/\d+/g);
                        $(".price-slider-wrapper .vps_labels span.active").css({
                            marginLeft: tooltipOffset[0] - marginValue + '%'
                        });
                    });
                }
            }
        }


    };
    $(window).on('elementor/frontend/init', Hostim.init);
}(jQuery, window.elementorFrontend));
