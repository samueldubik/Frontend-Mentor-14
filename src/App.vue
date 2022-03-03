
<template>
  <body>
    <header>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching scripted tutorials
        is great, but understanding how developers think is invaluable.
      </p>
    </header>
    <main>
      <section>
        <h2><span>Try it free 7 days </span>then $20/mo. thereafter</h2>
      </section>

      <article>
        
        <div class="flex"> 
        <input v-model="this.name" @click="validate(0)" :class="{'focus:outline-red border-red border-2' : !state[0]}" type="text" placeholder="First Name">
        <img class="error" :class="{'hidden' : state[0]}" src="../intro-component-with-signup-form-master/images/icon-error.svg" alt="">
        </div>
        <h3 :class="{'hidden' : state[0]}">First name can't be empty </h3>

        <div class="flex">
        <input v-model="this.surname" @click="validate(1)" :class="{'focus:outline-red border-red border-2' : !state[1]}"  type="text" placeholder="Last Name">
        <img class="error" :class="{'hidden' : state[1]}" src="../intro-component-with-signup-form-master/images/icon-error.svg" alt="">
        </div>
        <h3 :class="{'hidden' : state[1]}">Last name can't be empty </h3>

        <div class="flex">
        <input v-model="this.email" @click="validate(2)" :class="{'focus:outline-red border-red border-2' : !state[2]}"  type="email" placeholder="Email Address">
         <img class="error" :class="{'hidden' : state[2]}" src="../intro-component-with-signup-form-master/images/icon-error.svg" alt="">
        </div>
        <h3 :class="{'hidden' : state[2]}">Looks like this is not an email </h3>

        <div class="flex">
        <input v-model="this.password" @click="validate(3)" :class="{'focus:outline-red border-red border-2' : !state[3]}"  type="password" placeholder="Password" name="" id="">
        <img class="error" :class="{'hidden' : state[3]}" src="../intro-component-with-signup-form-master/images/icon-error.svg" alt="">
        </div>
        <h3 :class="{'hidden' : state[3]}">Password can't be empty</h3>
        <button>CLAIM YOUR FREE TRIAL</button>
        <p>
          By clicking the button, you are agreeing to our <a href="#">Terms and services</a>
        </p>
      </article>
    </main>
  </body>
</template>

<script>
  export default {
    data(){
      return {
        name:     "",
        surname:  "",
        email:    "",
        password: "",
        state: [true,true,true,true]
      }
    },
    methods: {
       validate(num){
       const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;;
       console.log("Number: " + num);
        for(let i = -1; i < num; i++){
          console.log("I: " + i);
          switch(num){
            
          case 0: (this.name.length == 0) ? this.state[0] = false : this.state[0] = true;  break;
          case 1: (this.surname.length == 0) ? this.state[1] = false : this.state[1] = true; break;
          case 3: (this.password.length == 0) ? this.state[3] = false : this.state[3] = true; break;
          case 2: (pattern.test(this.email)) ? this.state[2] = true : this.state[2] = false; break;
          }  
        }
      }
    }
  }
</script>

