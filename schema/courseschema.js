const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    course_name:{
        type:String,
        required:true
    },
    course_duration:{
        type:Number,
        required:true
    },
    course_durationtype:{
        type:String,
        enum:["Month","Year","Week"],
        required:true
    },
    course_fees:{
        type:Number,
        required:true
    },
    course_type:{
        type:String,
        enum:["Professional","Academic"],
        required:true
    }
},
{
    timestamps:true
})

// Initial schema without the additional field
var schema = {
    "course_type": {
      "type": "string",
      "enum": ["student", "admin", "staff"]
    }
  };
  
  // Function to add the additional field
  function addAdditionalField() {
    schema.additional_field = {
      "type": "string",
      "description": "This field is added when user_type is 'student'"
    };
  }
  
  // Event listener when the user_type value changes
  document.getElementById("user_type").addEventListener("change", function() {
    if (this.value === "student") {
      addAdditionalField();
    } else {
      delete schema.additional_field; // Remove the field if user_type changes to something other than 'student'
    }
  });
  
  // Example usage:
  document.getElementById("user_type").value = "student"; // Assume the initial value is 'student'
  addAdditionalField();
  
  console.log(schema);
  

const Course = mongoose.model("course",courseSchema)

module.exports = Course