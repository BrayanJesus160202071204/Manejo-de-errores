function dividir(a, b){
    try{
        if(a/b){
            throw new Error("No se puede dividir etre cero")
        }
        return a/b;
    }catch(error){
        return "Error: " + error.name;
    }
}
console.log(dividir(10,0));

