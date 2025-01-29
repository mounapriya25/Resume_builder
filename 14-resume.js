
let ele;
let a=0 
 let addinput=1
function reset(){
    console.log("hi")
        init()
    localStorage.removeItem('obj')
    console.log(obj)
    profile()
}
function add(c)
{
    
    ele =document.querySelector(`.${c}`)
    if(a==0){
        console.log('not diapay')
        ele.style.display='none'
        a=1
    }
    else{
        console.log(' diapay')
        ele.style.display='block'
        a=0
    }

   
}

function remove(c)
{   
    console.log(c)
    const parentdiv=c.closest('div')
    console.log(parentdiv)
    if(parentdiv){
        parentdiv.style.display='none'
      
    }
    else{
        console.log('not found') 
    }
    
}
function add_ele(c,e){
    con =document.querySelector(`.${c}`)
    ele =document.querySelector(`.${e}`)
    n =document.createElement('div')
    n=ele.cloneNode(true)// it is used to create copy existing dom node if it is true means copy of all elments/childs in that particular
    if(n.style.display=='none'){// if cloneNode(false) copy of only that dont contain its childs means outline here border
        console.log('yes')
        n.style.display='block'
    }
    con.appendChild(n)
    
   
}


let obj=JSON.parse(localStorage.getItem('obj'))
function init(){
    const keys=['n4','n7','n9','s1']
    const nul=['a1','a2','p1','p2','p3','e1','e2','e3','e4','e5','e6']
    const date=['d2','d4']
    obj={
        'n1': "Name",
        'n3': "Your Email",
        'n5': "Designation",
        'n6':"Pho no",
        'n8': "Address",
        'd1':'School Name',
        'd3':'Degree',
        'd5':'City',
        'd6':" Description",
        'n2':"data:image/jpeg;base64,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" 
    }
    for(const k of keys){
        obj[k]=" "
    }
    for(const k of date){
        obj[k]='dd-mm-yyyy'
    }
    for(const k of nul){
        obj[k]=null
    }
}

if(!obj){
    console.log('not')
    init()
    console.log('not')
    console.log(obj)
}

   
function save(){
    localStorage.setItem('obj',JSON.stringify(obj))
}
save()

function pnt(){
    console.log('print')
    window.print()
}
  


a=get(n1)
function profile(){
    const image=document.querySelector('.img')
    const html=` 
    
                <div>
                    <div class="gridtemp" style="margin-top: 10%;">
                        <div class="green">
                            <img class="img"  src="${obj.n2}" width='100'  height='100'>


                           <h3 class="center">${obj.n1+ obj.n4+ obj.n7}</h3>
                            <h5 class="center">${obj.n5}</h5>
                           
                            
                            <h5>ABOUT</h5>
                            <div class="nor line">
                                <p>${obj.n6}</p>
                                <p class="skill">${obj.n3}</p>
                                <p class="skill">${obj.n8}</p>
                                <p>${obj.n9}</p>
                            </div>
                            <h5>SKILLS</h5>
                            <div class="nor line js-s">
                                <div class="skill"></div>
                                
                            </div>

                        </div>
                        <div class="b2">
                            <h4>ACHIEVEMENTS</h4><hr>
                            <div class='ach'>
                                <div class="imp c a1 ">Title</div>
                                <div class="nor a2 js-a2" style="line-height:40px">Description</div>
                            </div>

                            <h4>EDUCATION</h4><hr>
                            <p class="imp c">${obj.d1}</p>
                            <p class="imp">${obj.d3} <span class="nor">${obj.d5}</span>  <span class="date">${obj.d2}</span>  <span class="date">${obj.d4}</span></p>
                            <p class="nor">${obj.d6}</p>
                            
                            <h4>EXPERIENCE</h4><hr>
                            <div class='exp'>
                            <p class="imp c">Title</p>
                            <p class="imp">Company Name <span class="nor">location </span>   <span class="date">dd-mm-yyyy</span>   <span class="date">dd-mm-yyyy</span></p>
                            <p class="nor">this is about experience </p>
                            </div>

                            <h4>PROJECTS</h4><hr>
                            <div class="nor proj">
                            <p >Project Name</p>
                            <p >Project Link</p>
                            <p class="nor">Description</p>
                            </div>
                            
                        </div>
                    </div> 
                </div>
                
              `

                     
document.querySelector('.js-res').innerHTML=html
dynamic()

}

window.onload=function(){// it is do when js load before html can cause error
    
    const image =document.querySelector('.img')
    const inpt =document.getElementById('n2')
    inpt.onchange= function(){
        //image.src=URL.createObjectURL(inpt.files[0])
        obj['n2']=URL.createObjectURL(inpt.files[0])
       
        console.log(obj.n2,obj,'opo')
        save()
        profile()
    }
}


function get(id){
    console.log(id.id) 
    let res=document.getElementById(`${id.id}`)
    if(res.value!==''&& res!==null){
        
        console.log(res,res.value,obj)
        if(String(res.id).charAt(0)==='n' ||String(res.id).charAt(0)==='d'){
            console.log('yes')
            obj[`${id.id}`]=res.value
            console.log(res.value,'sucess')
           
        }
        else{
            console.log('no');
            getinput(`${id.id}`)
            dynamic()
        }
        save()
        dynamic()
        profile()
        console.log(res.id)
        
    } 
}

function dynamic(){
    console.log(obj)
    for(key in obj){
        let   ht=''
        console.log(obj.key,'llllll')
        if(obj[key ]=== null){
            console.log(key,'ppp')

            continue;
        }
        switch(key){
            case 'a1':  
                       for(i in obj.a1 ){
                            console.log(i)

                            if(obj.a2 ===null || !(i in obj.a2)){
                                obj.a2=obj.a2 ||{}
                                obj.a2[i]=' '
                            }
                            ht+=`<div class="imp c a1 ">${obj.a1[i]}</div>
                                <div class="nor a2 js-a2" style="line-height:40px">${obj.a2[i]}</div>`
                                console.log(ht,'hhh');
                        }
                        document.querySelector('.ach').innerHTML=ht
                     break;
            case 'p1':  console.log('+++')
                        for(i in obj.p1 ){
                            console.log(i,'ii')
                            const key=['p2','p3']
                            for (let j of key){// of iterate over values(value at that index) ,in -over keys(index)
                                if(obj[j] === null ||!(i in obj[j])){
                                    obj[j]=obj.key ||{}//if obj.j - it try to access the proprty name j not the value of j so we use[j]
                                    obj[j][i]=' '
                                } 
                            }
                            ht+=`<p >${obj.p1[i]}</p>
                                <p >${obj.p2[i]}</p>
                                <p class="nor">${obj.p3[i]}</p>`
                                console.log(ht,'hhh');
                        }
                        document.querySelector('.proj').innerHTML=ht
                break;
            case 'e1':  console.log('---')
                        
                    for(i in obj.e1 ){
                        console.log(i,'ee')
                        const key=['e2','e3','e4','e5','e6']
                        for (let j of key){
                            if(obj[j] === null ||!(i in obj[j])){
                                obj[j]=obj.key ||{}
                                obj[j][i]=' '
                            } 
                        }
                        ht+=`<p class="imp c">${obj.e1[i]}</p>
                            <p class="imp">${obj.e3[i]} <span class="nor">${obj.e5[i]}</span>   <span class="date">${obj.e2[i]}</span>   <span class="date">${obj.e4[i]}</span></p>
                            <p class="nor">${obj.e6[i]} </p>`
                            console.log(ht,'hhh');
                    }
                    document.querySelector('.exp').innerHTML=ht
                break;
            case 's1':for(i in obj.s1 ){
                        console.log(i)
                        ht+=`<div class="skill">${obj.s1[i]}</div>`
                            console.log(ht,'hhh');
                        }
                        document.querySelector('.js-s').innerHTML=ht
                break;
        }
     }
}
function getinput(id){
    //console.log(id,'id')  // a1 like that
    const oj={}
    const ele=document.querySelectorAll(`#${id}`)
    //console.log(ele,'tt') //NodeList(2) [input#a1, input#a1]
    ele.forEach((inp,index)=>{
        oj[`${index+1}`]=inp.value
    })
    obj[`${id}`]=oj
    console.log(oj,'mmmm',obj[`${id}`])
}

arr=[]

profile()
console.log(obj)
