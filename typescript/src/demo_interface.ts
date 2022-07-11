interface Person{
    name: string;
    age: number;
}

const a : Person = {name: "John Doe", age: 50};
const b : Person = {name: "William", age: 35};

interface OnInit{
    ngOnInit: () => void;
}

export class MyComponent implements OnInit{
    type : string;
    constructor(type: string){
        this.type = type;
    }
    ngOnInit(){
        console.log("calling ngOnInit()");
    }
}