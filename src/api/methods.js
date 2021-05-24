const selectColor = (color) => {
/*    $dark-Grey: #272727;
    $dark-BlueGrey: #272D30;
    $blueGrey: #343C40;
    $light-BlueGrey: #484f53;
    $grey: #81898C;
    $blue: #51859e;
    $blue_pressed: #436e81;
    $orange: #ed962b;
    $purple: #977490;
    $exp-Blue: #6A77A5;
    $green: #008670;
    $red: #BC656B;
    $white: #EEEEEE;*/

    switch (color.toLowerCase()) {
        case 'dark-grey':
            return('272727');
            break
        case 'dark-bluegrey':
            return('272D30');
            break
        case 'bluegrey':
            return('343C40');
            break
        case 'light-bluegrey':
            return('484f53');
            break
        case 'grey':
            return('81898C');
            break
        case 'blue_pressed':
            return('436e81');
            break
        case 'blue':
            return('51859e');
            break
        case 'orange':
            return('ed962b');
            break
        case 'purple':
            return('977490');
            break
        case 'exp-blue':
            return('6A77A5');
            break
        case 'green':
            return('008670');
            break
        case 'red':
            return('BC656B');
            break
        case 'white':
            return('EEEEEE');
            break
        default:
            return null;
    }
}

export {selectColor}