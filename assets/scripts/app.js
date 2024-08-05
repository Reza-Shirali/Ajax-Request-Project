$("document").ready(function () {
  const XML = `https://dog.ceo/api/breed/`;
  const XML__LAST = `/images/random`;

  $(".wrapper__btn--search").click(function () {
    const userInput = $(".wrapper__input--user").val().toLowerCase();
    const outPut = XML + userInput + XML__LAST;
    const xHttp = new XMLHttpRequest();

    xHttp.open("GET", outPut);

    xHttp.onload = function () {
      if (xHttp.status === 200) {
        const response = JSON.parse(xHttp.responseText);
        $(".wrapper__img--dog").attr("src", response.message);
      } else {
        console.error("Error: " + xHttp.status);
      }
    };

    xHttp.onerror = function () {
      console.error("Request failed");
    };

    xHttp.send();
  });
});
