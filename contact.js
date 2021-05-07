$(document).ready(function(){
    $("#contact-form").validate({
        rules:{
            name:{
                required:true,
            },
            email_1:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                minlength:10,
                maxlength:40
            },
            message_s:{
                required:true,
                minlength:10,
            }
        },
            messages:{
                name:{
                    required: "This field is required"
                },
                email_1:{
                    required: "This field is required",
                    email: "Enter valid email-id"
                },
                subject:{
                    required: "This field is required",
                    minlength: "Atleast enter 10 characters",
                    maxlength: "Atmost 40 characters only"
                },
                message_s:{
                    required: "This field is required",
                    minlength: "Atleast enter 10 characters"
                }
            }
    })
})