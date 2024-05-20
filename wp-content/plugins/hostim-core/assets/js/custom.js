(function ($) {
    // USE STRICT
    "use strict";
    $(document).ready(function () {

        jQuery(document).on('click', '.pt-like-it', function () {
            var post_id = jQuery(this).find('.like-button').attr('data-id'),
                nonce = jQuery(this).find('.like-button').attr("data-nonce"),
                $this = jQuery(this);

            jQuery.ajax({
                url: likeit.ajax_url,
                type: 'post',
                data: {
                    action: 'pt_like_it',
                    post_id: post_id,
                    nonce: nonce
                },
                success: function (response) {
                    jQuery('#like-count-' + post_id).html(response);
                },
                complete: function () {
                    $this.addClass('disabled');
                }

            
            });
        
            return false;
        });

        //MailChimp Newsletter 
        $('[data-hostim-form]').each(function () {
            var $this = $(this);
            $('.form-result', $this).css('display', 'none');
            $this.submit(function () {
                $('button[type="submit"]', $this).addClass('clicked'); // Create a object and assign all fields name and value.

                var values = {};
                $('[name]', $this).each(function () {
                    var $this = $(this),
                        $name = $this.attr('name'),
                        $value = $this.val();
                    values[$name] = $value;
                }); // Make Request

                $.ajax({
                    url: $this.attr('action'),
                    type: 'POST',
                    data: values,
                    success: function success(data) {
                        if (data.error == true) {
                            $('.form-result', $this).addClass('alert-warning').removeClass('alert-success alert-danger').css('display', 'block');
                        } else {
                            $('.form-result', $this).addClass('alert-success').removeClass('alert-warning alert-danger').css('display', 'block');
                        }

                        $('.form-result > .content', $this).html(data.message);
                        $('button[type="submit"]', $this).removeClass('clicked');
                    },
                    error: function error() {
                        $('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').css('display', 'block');
                        $('.form-result > .content', $this).html('Sorry, an error occurred.');
                        $('button[type="submit"]', $this).removeClass('clicked');
                    }
                });
                return false;
            });
        });


        //Pricing Table
        $(".switch-input").on("change", function () {
            if (this.checked) {
                $(".yearly-price").css({
                    display: 'block'
                });
                $(".monthly-price").css({
                    display: 'none'
                });
            } else {
                $(".yearly-price").css({
                    display: 'none'
                });
                $(".monthly-price").css({
                    display: 'block'
                });
            }
        });

        $(".expand-btn").each(function () {
            $(this).on("click", function () {
                $(this).siblings(".feature-list").toggleClass("expand-list");
                $(this).toggleClass("active");
            });
        });


        // Domain Search Form Redirect
        if ($('#hostim-domain-search-off').length > 0) {
            $('#hostim-domain-search-off #hostim-domain').on('keyup', function () {
                let whmch_url = $('#hostim-domain-search-off .whmcs_url_hidden').val();
                let whmch_query = $(this).val();
                let btn_url = $('#hostim-domain-search-off .template-btn');
                btn_url.attr('href', whmch_url + whmch_query);
            });
        }


        $(".isb-price-btn").on("click", function () {
            $(this).toggleClass("clicked");
            $(".isb-price.year, .hds-price-year, .yearly_btn").toggleClass("show");
            $(".isb-price.month, .hds-price-month, .monthly_btn").toggleClass("hide");
        });

    });
        
})(jQuery);
