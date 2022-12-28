const {faker} = require("@faker-js/faker");
const express = require ("express");
const app = express();
const port = 8000;


const userObject = () => {
    const fakeUser ={
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        _id: faker.datatype.uuid()
    };
    return fakeUser
};

const newfakeUser = userObject();
console.log(newfakeUser);

const companyObject=() => {
    const fakeCompany ={
        _id: faker.datatype.uuid(), 
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
            
        }
    };
    return fakeCompany
};

const newfakeCompany = companyObject();
console.log(newfakeCompany);

app.get("/api/users/new", (req, res) => {
    const newUser = userObject();
    res.json(newUser);
});

app.get("/api/company/new", (req, res) => {
    const newCompany =companyObject();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = userObject();
    const newCompany = companyObject();
    const newUserCompany = {
        user: newUser,
        company: newCompany
    };
    res.json(newUserCompany);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );