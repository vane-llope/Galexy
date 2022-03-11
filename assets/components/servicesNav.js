app.component('services-nav', {
  
    template:
        /*html*/
        ` 
        <nav class="navbar navbar-expand-lg navbarS ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><b>LOGO </b><i class="fas fa-meteor"></i></a>
          <button  class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "><i class="fa fa-bars" aria-hidden="true" style="color:white"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="passwordGenerator.html">password generator</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="melicode.html">identity code</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="numberToLetter.html">number to letter</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="engToPer.html">eng number to per number</a>
              </li>
              
            </ul>
            <ul class="navbar-nav mb-2 mb-lg-0" style="margin-right:3%" >
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                  </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <nav class="navbar-expand-lg navbarS ">
         <message></message>
        <a class="btn btn-primary " style="margin:2% 60% 1%  1%" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          sign in
        </a>
      <div class="collapse" id="collapseExample">
        <div class="card card-body container bg-gray">
        <sign-in></sign-in>
    </div>
      </div>
            </nav>
      
        `})