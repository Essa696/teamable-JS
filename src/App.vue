<template>
    <div>
      <div v-show="!isEditMode" >
        <h1>User profile</h1>
        <img :src="image" alt="Profile Image" />
  
        <span>Name: </span><b id="name">{{ name }} </b>
        <hr />
  
        <span>Email: </span><b id="email">{{ email }}</b>
        <hr />
  
        <span>Interests: </span><b id="interests">{{ interests }}</b>
        <hr />
  
        <button @click="handleEditProfile">Edit Profile</button>
      </div>
  
      <div v-show="isEditMode" >
        <h1>User profile</h1>
        <img :src="image" alt="Profile Image" />
  
        <span>Name: </span>
        <input type="text" id="input-name" v-model="name" />
        <hr />
  
        <span>Email: </span>
        <input type="text" id="input-email" v-model="email" />
        <hr />
  
        <span>Interests: </span>
        <input type="text" id="input-interests" v-model="interests" />
        <hr />
  
        <button @click="handleUpdateProfile">Update Profile</button>
      </div>
    </div>
  </template>



<script>
import { createHydrationRenderer } from "vue";
import image from "./profile.jpg";

export default {
  name: "App",
  data() {
    return {
      image: image,
      name : "",
      email: "",
      interests: "",
      isEditMode: false

    };

    

  },

  async created() {

    const userData = await this.fetchUserProfile()
    this.name = userData.name
    this.email = userData.email
    this.interests = userData.interests

  },

  methods: {
    handleEditProfile() {

       this.isEditMode = true
    },
    async handleUpdateProfile() {

        const payload = {

            name: this.name,
            email: this.email,
            interests: this.interests

        }
        const resJson = await this.updateUserProfile(payload)
        console.log(resJson)
     
        this.isEditMode = false
     
    },

    async fetchUserProfile() {

       const res = await fetch("get-profile")
       return await res.json()

    },

    async updateUserProfile (payload) {

        const res = await fetch("update-profile", {
            
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },

            body: JSON.stringify(payload)

        })

        return await res.json()
    }

    }
}
</script>


<style>



    
    img {

    width: 300px;
    height: 350px;
    display: block;
    margin-bottom: 40px;
    }


    div {

    margin: 40px auto;
    width: 70%;         

    }

    hr {

    width: 400px;
    margin-left: 0%;
    margin-top: 20px;
    margin-bottom: 20px;
    }

    button {

    width: 160;
    font-size: 15px;
    height: 45px;
    border-radius: 10px;

    }

    button:hover {

    cursor: pointer;
    }

    input {

    width: 200px;
    font-size: 15px;
    padding: 10px;
    }



</style>