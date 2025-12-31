(function ($) {
  function handleFormSubmit() {
    $("#referrer").val(document.referrer);

    $(document).ready(function () {
      $("form").submit(function (event) {
        event.preventDefault();
        var formData = $(this).serializeArray();
        var contactDto = {};

        $.each(formData, function (index, field) {
          contactDto[field.name] = field.value;
        });

        sessionStorage.setItem("contact-dto", JSON.stringify(contactDto));
        location.href = "merci.html";
      });
    });
  }

  function setBackToReferrer() {
    $(document).ready(function () {
      var referrerLink = $("#backToReferrer");
      var contactDto = JSON.parse(sessionStorage.getItem("contact-dto"));

      if (contactDto && contactDto.referer) {
        referrerLink.attr("href", contactDto.referer);
      }
    });
  }

  // Run the appropriate function based on the current page
  var currentPage = document.location.pathname;

  if ( currentPage.endsWith("/contactez-nous/index.html") || currentPage.endsWith("/contactez-nous/") ) {
    handleFormSubmit();
  } else if (currentPage.endsWith("merci.html")) {
    setBackToReferrer();
  }
})(jQuery);
