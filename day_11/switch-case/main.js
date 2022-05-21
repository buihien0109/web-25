let money = 10000;

switch (money) {
    case 12000:
    case 15000:
    case 20000: {
        console.log("Cafe sữa");
        break;
    }
    case 10000 : {
        console.log("Cafe đá");
        break;
    }
    case 8000: {
        console.log("Sting dâu");
        break;
    }
    case 2000: {
        console.log("Trà đá");
        break;
    }
    default: {
        console.log("Không có đồ uống phù hợp");
        break;
    }

}