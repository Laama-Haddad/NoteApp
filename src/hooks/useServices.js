import LaravelAPI from '../api/LaravelAPI';

export default {
    async  signInFunc(callback) {
        try {
                await LaravelAPI.post('/signin',{
                    email: 'najy1@gmail.com',
                    password: 'secret'
                })
                .then((response) => {
                    console.log('Token:',JSON.stringify(response.data.data['access_token']));
                    console.log('Email:',JSON.stringify(response.data.data['email']));
                    console.log('Name:',JSON.stringify(response.data.data['name']));
                    console.log('message',JSON.stringify(response.data.message));
                      return   callback(response.data);
                }, (error) => {
                    console.log(error);
                });
            }
            catch(e) {
                console.log('The Error: ',e);
            }
    },//end Signin Function

    async  signUpFunc(callback) {
        try {
                await LaravelAPI.post('/signup',{
                    email: 'LoL4@gmail.com',
                    password: 'secret',
                    name:'Lol4 Salloum'
                })
                .then((response) => {
                    console.log('Sign up info:',JSON.stringify(response.data));
                      return   callback(response.data);
                }, (error) => {
                    console.log(error);
                });
            }
            catch(e) {
                console.log('The Error: ',e)
            }
    },//end Signup Function
  
    async  getNotesFunc(userToken,userId,callback) {
        try {
            const options = {
                headers: {'Authorization': userToken}
              };
              console.log('The Token',userToken);
                await LaravelAPI.get('/notes/user?user_id='+userId,options)
                .then((response) => {
                    console.log('notes:',JSON.stringify(response.data));
                      return   callback(response.data);
                }, (error) => {
                    console.log(error);
                });
            }
            catch(e) {
                console.log('The Error: ',e)
            }
    },//end getNotesFunc Function

    async  storeNoteFunc(userToken,callback) {
        try {
                const options = {
                    headers: {'Authorization': userToken}
                };
                await LaravelAPI.post('notes/store',{
                    title: 'new rt',
                    description: 'new rd'
                },options)
                .then((response) => {
                    console.log('new note:',JSON.stringify(response.data));
                      return   callback(response.data);
                }, (error) => {
                    console.log(error);
                });
            }
            catch(e) {
                console.log('The Error: ',e);
            }
    },//end Store Note Function

    async  updateNoteFunc(userToken,callback) {
        try {
                const options = {
                    headers: {'Authorization': userToken}
                };
                await LaravelAPI.post('/notes/update',{
                    title: 'new rsdfgnt',
                    description: 'new rsdfghd',
                    id:11
                },options)
                .then((response) => {
                    console.log('updated note:',JSON.stringify(response.data));
                      return   callback(response.data);
                }, (error) => {
                    console.log(error);
                });
            }
            catch(e) {
                console.log('The Error: ',e);
            }
    },//end Update Note Function
    async  deleteNoteFunc(userToken,idNote,callback) {
        try {
            const options = {
                headers: {'Authorization': userToken}
              };
              console.log('The Token',userToken);
                await LaravelAPI.delete('/notes/destroy?id='+idNote,options)
                .then((response) => {
                    console.log('deleted note:',JSON.stringify(response.data));
                      return   callback(response.data);
                }, (error) => {
                    console.log(error);
                });
            }
            catch(e) {
                console.log('The Error: ',e)
            }
    },//end getNotesFunc Function

}
