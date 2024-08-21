module.exports = cds.service.impl( async function(){
 
    //Step 1: get the object of our odata entities
    const { EmployeeSet } = this.entities;
 
//During creation validating if the employee salary is less than 50000 or not
    this.on('CREATE', EmployeeSet, (req) => {
        var salary = parseInt(req.data.salaryAmount);
        var currency_code = req.data.Currency;
        if(salary < 50000 && currency_code == USD){
            console.log("Create operation successful");//creation sucess meassage
        }
        else{
            req.error(500,"Employee’s salary must be less than 50000 USD"); //error message thrown
        }
    });
    
    this.before('UPDATE',EmployeeSet,(req)=>{
        if(('nameFirst' in req.data) && ('loginName' in req.data) ){
                req.error("Operation not allowed");
        }
    });
 
    this.after('UPDATE', EmployeeSet, (req) => {
        console.log("Update operation successful");
    });


    this.on('DELETE',EmployeeSet,(req)=>{
        console.log(" Delete operation is successful");
    })
});



 