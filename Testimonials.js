var postBtn = $('.post-btn');
var postedTestimony = $('.posted-testimony');



postBtn.on('click', gimmePost);

function gimmePost(event) {
  event.preventDefault();
  var nameInput = $('.name-input').val();
  var originInput = $('.origin-input').val();
  var destinationInput = $('.destination-input').val();
  var testimonyInput = $('testimony-input').val();
  postedTestimony.text(` ${nameInput} from ${originInput}, travelling to ${destinationInput}:
  ${testimonyInput}`);
}