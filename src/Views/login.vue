<template>

  <!-- CSS -->
  <link
    rel="stylesheet"
    href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500"
  />
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/form-elements.css" />
  <link rel="stylesheet" href="assets/css/style.css" />

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Favicon and touch icons -->
  <link rel="shortcut icon" href="assets/ico/favicon.png" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="144x144"
    href="assets/ico/apple-touch-icon-144-precomposed.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="114x114"
    href="assets/ico/apple-touch-icon-114-precomposed.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="72x72"
    href="assets/ico/apple-touch-icon-72-precomposed.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    href="assets/ico/apple-touch-icon-57-precomposed.png"
  />

  <!-- Top content -->
  <div class="top-content">
    <div class="inner-bg">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2 text">
            <h1><strong>Ayiz</strong></h1>
            <div class="description"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3 form-box">
            <div class="form-top">
              <div class="form-top-left">
                <h3>Login</h3>
                <p>Enter your Email and password to log on</p>
              </div>
              <div class="form-top-right">
                <i class="fa fa-lock"></i>
              </div>
            </div>
            <div class="form-bottom">
              <form role="form" action="" method="post" class="login-form">
                <div class="form-group">
                  <label class="sr-only" for="form-username">Username</label>
                  <input
                    type="text"
                    name="form-username"
                    placeholder="Username..."
                    class="form-username form-control"
                    id="form-username"
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="form-password">Password</label>
                  <input
                    type="password"
                    name="form-password"
                    placeholder="Password..."
                    class="form-password form-control"
                    id="form-password"
                  />
                </div>
                <button type="submit" name="submit" class="btn" @click="$router.push('/buildings')">
                  Sign in!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Javascript -->

  <!--[if lt IE 10]>
    <script src="assets/js/placeholder.js"></script>
  <![endif]-->
</template>
