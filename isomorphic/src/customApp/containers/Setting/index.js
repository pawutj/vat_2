import React, { Component ,useState, useEffect} from "react";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";
import Form from '../../../components/uielements/form';
import IntlMessages from '../../../components/utility/intlMessages';
import Input ,{InputGroup}from '../../../components/uielements/input';
import Button, { ButtonGroup } from '../../../components/uielements/button';
import { Col, Row, Icon } from 'antd';
import { RadioGroup, RadioButton } from '../../../components/uielements/radio';

import "./style_0.css"
import "../style_all.css"
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};
const formConfig = {
  borderColor:"#654018",

}

const range = e => Array(e).fill(0).map((x,i) =>i)

const Setting = () => {

  const cat5 = () =>{
    let t = form.cat
    t= t.slice(0,5)
    setValues({
      ...form,
      cat:t
    })
  }

  const cat10 =() =>{
    let t = form.cat
    console.log(t)
    if(t.length==5)
      t = [...t,'','','','','']
    setValues({
      ...form,
      cat:t
    })
  }

  const fecthData = () =>{
    console.log("A")
    console.log(range(5))
  }

  const proto_1 = ['ร้านเสื้อผ้าเครื่องแต่งกาย','ร้านเครื่องสำอางค์','ร้านเครื่องประดับ','ร้านเครื่องใช้ไฟฟ้า','ร้านคอมพิวเตอร์']
  const proto_2 = ['Apparel and Accessories','Cosmetics & Purfumery','Gems & Jewellry','Electrical appliance','Computer']
  const addField = (c) =>{
    console.log(c)
    let t = form.cat
    if(c=='ร้านเสื้อผ้าเครื่องแต่งกาย'){
   
      t[0] = 'เสื้อ'
      t[1] = 'กางเกง'
      t[2] = 'รองเท้าผ้าใบ'
      t[3] = 'รองเท้าหนัง'
      t[4] = 'กระเป๋าหนัง'
      if(t.length==10){
        t[5] = 'กระเป๋าผ้า'
        t[6] = 'ผ้าพันคอ'
        t[7] = 'ถุงมือ'
        t[8] = 'ถุงเท้า'
        t[9] = 'เข็มขัดหนัง'
      }
    }

    if(c=='Apparel and Accessories'){
   
      t[0] = 'Shirts'
      t[1] = 'Trousers'
      t[2] = 'Sneakers'
      t[3] = 'Slingbacks'
      t[4] = 'Leather Bag'
      if(t.length==10){
        t[5] = 'Cloath Bag'
        t[6] = 'Scarf'
        t[7] = 'Glove'
        t[8] = 'Socks'
        t[9] = 'Leather Belt'
      }
    }

    if(c=='Cosmetics & Purfumery'){
     t = t.map( x=>'')
    }

    if(c=='Gems & Jewellry'){
      t = t.map( x=>'')
     }

     
    if(c=='Electrical appliance'){
      t = t.map( x=>'')
     }

     if(c=='Computer'){
      t = t.map( x=>'')
     }

    if(c=='ร้านเครื่องสำอางค์'){
      t = t.map( x=>'')
     }

     if(c=='ร้านคอมพิวเตอร์'){
      t = t.map( x=>'')
     }
     if(c=='ร้านเครื่องใช้ไฟฟ้า'){
      t = t.map( x=>'')
     }


    if(c=='ร้านเครื่องประดับ'){
      t = t.map( x=>'')
    }
      setValues({
        ...form,
        cat: t
      })

  }
  const [form,setValues] = useState({
    id:'',
    name:'',
    subid:'',
    no:'',
    road:'',
    dis:'',
    pro:'',
    tel:'',
    cat :['','','','','']
  })

  const [lang,_setLang] = useState(true)
  
  const setLang = () =>{
    _setLang(lang => !lang)
    console.log(lang)
  }

  const updateField = e => {
 
    setValues({
        ...form,
        [e.target.name]:e.target.value
      })
     
    }
      
    const updateArray =(e,f)=> {
      let t = form.cat
      t[f] = e.target.value 
      
      setValues({
          ...form,
          [form.cat]:t
        })

      }
        


    return (
      <LayoutContentWrapper>
        <LayoutContent>
        <div className="zoomC"> 
        <div style  = {{display:'flex',justifyContent:"center",width:'100%'}}>
      <div style = {{textAlign:'center',backgroundColor:"#654018" , width:"200px",marginBottom:"20px"}}>
      <h2 style = {{color:"white"}} className = "font_kanit">Setting up</h2>
      </div>
      </div>
      
          <div className = "container_0">
            <div className = "taxpayer">
          <FormItem
              {...formItemLayout}
    label={<b><font>{lang?"เลขประจำตัวผู้เสียภาษี":"Taxpayar Identification No"}</font></b>}
            >
              <Input  placeholder="Text1234567" name = "id" value={form.id} onChange = {updateField} style = {{ backgroundColor:"#fcfd97"}} className="font_kanit" />
            </FormItem>
            </div>

            <div className = "branch">
            <FormItem
              {...formItemLayout}
              label={<b><font>{lang?"ชื่อร้านค้า":"Name of Retailer"}</font></b>}
            >
              <Input placeholder="Alethia" name = "name" value={form.name} onChange = {updateField} style = {formConfig} className="font_kanit"  />
            </FormItem>
            </div>
            <div className = "retailer">
            <FormItem
              {...formItemLayout}
              label={<b><font>{lang?"เลขที่สาขา":"Branch No"}</font></b>}
            >
              <Input placeholder="0" name = "subid" value={form.subid} onChange = {updateField} style = {formConfig}  className="font_kanit"  />
            </FormItem>
            </div>
            <div className = "emp_1"></div>
            </div>

            
            <h2><font><b>{lang?"ที่ตั้งร้านค้า":"For Retailer"}</b></font></h2>
            <hr></hr>
            
            <div style ={{display:'flex',justifyContent:'flex-end',padding:'10px'}}>
              <a><p><font onClick = {setLang}><b>{lang?"Eng":"Th"}</b></font></p></a>
            </div>

            <div className = "container_4">
            <FormItem
              {...formItemLayout}
              label={<font><b>{lang?"เลขที่":"Address No"}</b></font>}
            >
              <Input placeholder="123/456" name = "no" value={form.no} onChange = {updateField} style = {formConfig} className="font_kanit"  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<font><b>{lang?"ถนน":"Street"}</b></font>}
            >
              <Input placeholder="พหลโยธิน" name = "road" value={form.road} onChange = {updateField} style = {formConfig} className="font_kanit"  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<font><b>{lang?"อำเภอ":"District"}</b></font>}
            >
              <Input placeholder="ลาดพร้าว" name = "dis" value={form.dis} onChange = {updateField}style = {formConfig} className="font_kanit"    />
            </FormItem>

            <FormItem 
              {...formItemLayout}
              label={<font><b>{lang?"จังหวัด":"Province"}</b></font>}
            >
              <Input placeholder="กรุงเทพ" name = "pro" value={form.pro} onChange = {updateField} style = {formConfig} className="font_kanit"  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<font><b>{lang?"โทรศัพท์":"Telephone"}</b></font>}
            >
              <Input placeholder="000-0000000" name = "tel" value={form.tel} onChange = {updateField}style = {formConfig} className="font_kanit"  />
            </FormItem>

            </div>
           <h2> <font><b>{lang?"กลุ่มสินค้า":"Product Group"}</b></font></h2>
            <hr></hr>
            
            <div style ={{marginTop:"10px" , marginLeft:"7.5%"}}>
            <h4><b><font>{lang?"ร้านต้นแบบ":"Shop Type"} :</font></b></h4>
            </div>
            
            <div style ={{marginTop:"10px",marginBottom:"10px",display:'flex'}}>
            {lang?
            proto_1.map(x => (
              <Button onClick = {() => addField(x)} style = {{marginLeft:'auto',marginRight:'auto',width:"210px",border:"3px solid",...formConfig}} >{<font>{x}</font>}</Button> 
              )
            )
            :
            proto_2.map(x => (
              <Button onClick = {() => addField(x)} style = {{marginLeft:'auto',marginRight:'auto',width:"210px",border:"3px solid",...formConfig}} >{<font>{x}</font>}</Button> 
              )
            )

            }
            </div>
            <div style ={{marginTop:"10px" , marginLeft:"5.7%"}}>
            <h4><font><b>{lang?"จำนวนตัวเลือก":"Choice Number"}{` :`}</b></font></h4>
            </div >
            <div style = {{marginTop:"10px",marginLeft:"10%"}}>
            <Button shape="circle"   onClick ={cat5} style = {{margin:"10px",border:"3px solid #654018" }}><font>5</font></Button > 
            <Button shape="circle"  onClick = {cat10} style = {{margin:"10px",border:"3px solid #654018"}} ><font>10</font></Button > 
            </div>
            <h4><b><font>{lang?"ประเภทสินค้า ":"Product Item "}:</font></b></h4>

            <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <div style ={{display:"flex"}}>
                  {range(5).map((x,i) => 
                    (
                    <div style  ={{marginLeft:"auto",marginRight:'auto'}}>
                    <Input value={form.cat[x]} onChange ={e => updateArray(e,x)} style = {{border:"3px solid",width:"210px",...formConfig}} className="font_kanit"  />
                    </div>
                    )
                  )
                  }
                  </div>
                </InputGroup>

                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <div style ={{display:"flex"}}>
                  {form.cat.length == 10?range(5).map((x,i) => 
                    (
                    <div style  ={{marginLeft:"auto",marginRight:'auto'}}>
                     <Input value={form.cat[x+5]} onChange ={e => updateArray(e,x+5)} style = {{border:"3px solid",width:"210px",...formConfig,}} className="font_kanit"  />
                    </div>
                    )
                  ):null
                  }
                  </div>
                </InputGroup>


            <br></br>
            <br></br>
            <div style = {{display:'flex',justifyContent:'center'}}>
            <Button onClick = {fecthData} style = {{width:"200px",backgroundColor:"#ff7f26",height:"40px"}} >
                  <font style = {{fontSize:"18px"}}>{lang?"ตกลง":"enter"}</font>
            </Button>
            </div>
            </div>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  
}
export default Setting
