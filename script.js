// Container 1
$(function() {
    var content = "My New Awesome Content";
    $(".panel-button").on("click", function() {
        var panelId = $(this).attr("data-panelid");
        $("#" + panelId).slideToggle(200);
        $("#" + panelId + " .panel-body").html(content);
    });

});

// Container 2
$('input[type="text"]').on('keydown, keyup', function () {
    //get a reference to the text input value
    var texInputValue = $('#testInput').val();
    
    //show the text input value in the UI
    $('#message p span').html(texInputValue);
});

// Container 3
// var user=$('#userSearch').val();
// $("#button").submit(function(e) {
//     e.preventDefault(); // <==stop page refresh==>
//     var user=$('#userSearch').val();
// });

// var user=document.getElementById('#userSearch');

$('#userSearch').on('keydown, keyup', function () {
    //get a reference to the text input value
    var user = $('#userSearch').val();

    // if (user==null) {
    //     var user = "jameshtwose";
    // } else { 
    //     var user = $('#userSearch').val();
    // }
    
    //show the text input value in the UI
    getRequest(`https://api.github.com/users/${user}`)
    .then(data => console.log(data)) // Result from the `response.json()` call
    .catch(error => console.error(error))
});

// var user="defunkt";
// getRequest(`https://api.github.com/users/${user}`)
//   .then(data => console.log(data)) // Result from the `response.json()` call
//   .catch(error => console.error(error))

function getRequest(url, data) {
  return fetch(url, {
    method: 'GET', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  })
  .then(response => response.json())
  .then( data => {const user = document.querySelector('#userInfo');
                user.innerHTML = `<a href=${data.html_url}>Name: ${data.name}</a><p>Followers : ${data.followers}</p><img src="${data.avatar_url}" height="100px">`
            })
}
