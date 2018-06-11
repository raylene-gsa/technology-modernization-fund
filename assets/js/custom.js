function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (60 * (60 * 1000)) );
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + "; path=/";
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

(function($){
  jQuery(document).ready(function() {

    // set a cookie
    if (getCookie('in_development') == 'true') {
      $(".popup-frame").hide();
    } else {
      $(".popup-frame").show();
      setCookie('in_development','true');
    }

    $( ".popup" ).click(function() {
      $(".popup-frame").hide();
    });

    // A minimal slideshow for the #quote-box
    var currentIndex = 0,
    items = $('#quote-frame .quote'),
    itemAmt = items.length;
    $('#quote-frame .quote:first-child').addClass('active');

    function cycleItems() {
      var item = $('#quote-frame .quote').eq(currentIndex);
      items.removeClass('active');
      item.addClass('active');
    }
    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 4000);

    // Determine which is the tallest of the .quote and set all the rest to that same height
    var maxHeight = -1;
    $('#quote-frame .quote').each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
    $('#quote-frame .paper').height(maxHeight);



    // PDF Finder - - - - - - - - - - -
    // Looks for all the links (hrefs) in .post-content that end with .pdf and appends the PDF icon to the end of the link
    $('.post-content').find('a').each(function() {
      var href = $(this).attr('href');
      var file_type = href.substr(href.lastIndexOf('.')).toLowerCase();
      console.log(baseurl);
      if (file_type  === '.pdf') {
        var icon = '<img class="pdf icon" src="'+baseurl+'/assets/img/icon-pdf.png" height="24" width="24" alt="View the PDF">';
        $(this).append(icon);
      }
      if (file_type  === '.pptx') {
        var icon = '<img class="ppt icon" src="'+baseurl+'/assets/img/icon-ppt.png" height="24" width="24" alt="View the PowerPoint">';
        $(this).append(icon);
      }
      if (file_type  === '.docx') {
        var icon = '<img class="doc icon" src="'+baseurl+'/assets/img/icon-word.png" height="24" width="24" alt="View the Doc">';
        $(this).append(icon);
      }
      if (file_type  === '.xlsx') {
        var icon = '<img class="xlsx icon" src="'+baseurl+'/assets/img/icon-xls.png" height="24" width="24" alt="View the Doc">';
        $(this).append(icon);
      }
    });

  });

})(jQuery);
