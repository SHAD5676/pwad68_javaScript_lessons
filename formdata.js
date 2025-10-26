class FormData {
    constructor(name, address, phone) {

        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    DataDisplay() {
        let output = "<h1>Form Information</h1>";
        output += "Name:" + this.name + "<br>";
        output += "Address:" + this.address + "<br>";
        output += "Phone:" + this.phone + "<br>";
        return output;


    }


}