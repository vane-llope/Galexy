app.component('sign-in', {
    template:
        /*html*/
        `
        <form class="row g-3" @submit.prevent="onSubmit" >
        <div class="col-12">
          <label for="inputAddress" class="form-label">UserName</label>
          <input type="text" class="form-control" v-model="UserName"  id="inputAddress">
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" v-model="Email" id="inputEmail4">
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="Password" id="inputPassword4">
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Address</label>
          <input type="text" class="form-control" v-model="Address" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">country</label>
          <input type="text" class="form-control" v-model="country" id="inputCity">
        </div>
        
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control"v-model="City"  id="inputCity">
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input"  v-model="checked" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
      </form> 
        `,
        data: function () {
            return {
              Email: '',
              Password:'',
              UserName:'',
              Address:'',
              country:'',
              City:'',
              checked:false

            }
        },
       /* methods:{
          onSubmit(){
          let productReview={
            Email=this.Email,
            Password=this.Password,
            UserName=this.UserName,
            Address=this.Address,
            country=this.country,
            City=this.City,
            checked=this.checked,
          }
          this.$emit('review-submitted',productReview);

          this.Email='';
          Password='';
              UserName='';
              Address='';
              country='';
              City='';
              checked=false;
          },
        }*/
      
      })