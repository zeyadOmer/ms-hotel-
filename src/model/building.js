
//floor
const floors=[
    //almohandsein
    {
        bId:1,
    floorId:1,
    title:'الطابق الاول',
    },
    {
        bId:1,
        floorId:2,
        title:'الطابق الثاني',
        },
        {
                bId:1,
            floorId:3,
            title:'الطابق الثالث',
            },
    //alftehab
    {
        bId:2,
    floorId:1,
    title:'الطابق الاول',
    },
    {
        bId:2,
    floorId:2,
    title:'الطابق الثاني',
    },
]
//شقق
const flats=[
    //almohandseein
    {
    bId:1,
    flat_id:1,
    fId:1,
    flat_img:'',
    status:'rented',
    cus_id:1,
    },
    {
        bId:1,
        flat_id:2,
        fId:1,
        flat_img:'',
        status:'repair',
        cus_id:2,
        },
        {
            bId:1,
            flat_id:3,
            fId:1,
            flat_img:'',
            status:'empty',
            cus_id:0,
            },

            {
            bId:1,
            flat_id:4,
            fId:2,
            flat_img:'',
            status:'repair',
            cus_id:3,
            },
     
             //alfetihab
    {
        bId:2,
        flat_id:5,
        fId:1,
        flat_img:'',
        status:'rented',
        cus_id:2,
        },
        {
            bId:2,
            flat_id:6,
            fId:1,
            flat_img:'',
            status:'rented',
            cus_id:3,
            },
            {
                bId:2,
                flat_id:7,
                fId:2,
                flat_img:'',
                status:'rented',
                cus_id:0,
                },
    
             
                
]
  

//مستأجرين
const customers=[
    {
        cusID:0,
        flatId:3,
        name:'تيسير الضو ',
        cusImg:'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg',
        startDate:'',
        endDate:''
    },
    {
            cusID:1,
            flatId:1,
            name:'يسرى التجاني بشير',
            phone:'0912358602',
            identity:'1118992344002',
            idType:'بطاقه قومية',
            cusImg:'https://randomuser.me/api/portraits/women/71.jpg',
            startDate:'20/11/2018',
            endDate:'30/4/2020'

},
{
    cusID:2,
    flatId:2,
    name:'الهادي السر',
        cusImg:'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg',
        startDate:'',
        endDate:''
},

{
    bId:2,
    cusID:3,
    flatId:5,
    name:'يوسف محمد',
    cusImg:'https://randomuser.me/api/portraits/women/85.jpg',
    startDate:'',
    endDate:''
},
{
    bId:2,
    cusID:4,
    flatId:6,
    name:'طارق ابزيد',
    cusImg:'https://randomuser.me/api/portraits/women/85.jpg',
    startDate:'',
    endDate:''
},
{
    bId:2,
    cusID:0,
    flatId:7,
    name:'',
    cusImg:'https://randomuser.me/api/portraits/women/85.jpg',
    startDate:'',
    endDate:''
}
]

export {flats, floors,customers}