var onSignIn = (googleUser) => {
  const profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display", "none");
  $(".data").css("display", "block");
  $("#pic").attr('src', profile.getImageUrl());
  $("#email").text(profile.getEmail());
};

const signOut = () => {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    alert("You have been successfully signed out");
    $(".g-signin2").css("display", "block");
    $(".data").css("display", "none");
  });
};