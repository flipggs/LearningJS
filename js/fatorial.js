function fatorial(value){
    if (value === 1)
        return value;

    return value * fatorial(value -1);
}