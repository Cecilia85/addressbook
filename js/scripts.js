//business logic
function Contact(first, last, birthday) {
  this.firstName = first;
  this.lastName = last;
  this.birthday =birthday;
}

Contact.prototype.fullInfo = function() {
  return this.firstName + " " + this.lastName +" "+ this.birthday;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedBirthday= $("input#new-birthday").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName,inputtedBirthday );

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullInfo() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".birthday").text(newContact.birthday);

    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-birthday").val("");

  });
});
