module.exports = cds.service.impl( async function(){
 
    //Step 1: get the object of our odata entities
    const { EmployeeSet } = this.entities;
 
//During creation validating if the employee salary is less than 50000 or not
    this.on('CREATE', EmployeeSet, (req) => {
        var salary = parseInt(req.data.salaryAmount);
        if(salary < 50000 && Currency_code==USD){
            console.log("Create operation successful");//creation sucess meassage
        }
        else{
            req.error(500,"Employee’s salary must be less than 50000 USD"); //error message thrown
        }
    });
    this.before('UPDATE', EmployeeSet, (req) => {
        var salary = parseInt(req.data.salaryAmount);
        if(salary < 50000 && Currency_code==USD){
            console.log("Create operation successful");
        }
        else{
            req.error(500,"Employee’s salary must be less than 50000 USD");
        }
    });

    this.on('DELETE', EmployeeSet,(req)=>{
    })


 
}
);

 