console.log('hello world')

const helloWolrdBox = document.getElementById('hello-world')

helloWolrdBox.textContent = 'hello world'

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response){
    console.log('success', response)
    },
    error: function(error){
        console.log('error', error)
    }
})