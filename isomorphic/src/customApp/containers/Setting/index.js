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
    sm: { span: 7 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};
const formConfig = {
  borderColor:"#654018"
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

  const proto = ['ร้านเสื้อผ้าเครื่องแต่งกาย','ร้านเครื่องสำอางค์','ร้านเครื่องประดับ','ร้านเครื่องใช้ไฟฟ้า','ร้านคอมพิวเตอร์']
  const addField = (c) =>{
    console.log(c)
    let t = form.cat
    if(c=='ร้านเสื้อผ้าเครื่องแต่งกาย'){
   
      t[0] = 'เสื้อ'
      t[1] = 'กางเกง'
      t[2] = 'รองเท้าผ้าใบ'
      t[3] = 'รองเท้าหนัง'
      t[4] = 'กระเป๋าหนัง'
    }
    if(c=='ร้านเครื่องสำอางค์'){
      t[0] = ''
      t[1] = ''
      t[2] = ''
      t[3] = ''
      t[4] = ''
    }

    if(c=='ร้านเครื่องประดับ'){
      t[0] = ''
      t[1] = ''
      t[2] = ''
      t[3] = ''
      t[4] = ''
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
        <div style  = {{display:'flex',justifyContent:"center",width:'100%'}}>
      <div style = {{textAlign:'center',backgroundColor:"#654018" , width:"200px",marginBottom:"20px"}}>
      <h2 style = {{color:"white"}}>Setting up</h2>
      </div>
      </div>
      
          <div className = "container_0">
            <div className = "taxpayer">
          <FormItem
              {...formItemLayout}
    label={<b><font>เลขประจำตัวผู้เสียภาษี</font></b>}
            >
              <Input placeholder="Text1234567" name = "id" value={form.id} onChange = {updateField} style = {formConfig} />
            </FormItem>
            </div>

            <div className = "branch">
            <FormItem
              {...formItemLayout}
              label={<b><font>ชื่อร้านค้า</font></b>}
            >
              <Input placeholder="Alethia" name = "name" value={form.name} onChange = {updateField} style = {formConfig}  />
            </FormItem>
            </div>
            <div className = "retailer">
            <FormItem
              {...formItemLayout}
              label={<b><font>เลขที่สาขา</font></b>}
            >
              <Input placeholder="0" name = "subid" value={form.subid} onChange = {updateField} style = {formConfig}   />
            </FormItem>
            </div>
            <div className = "emp_1"></div>
            </div>

            
            <h2><font>ที่ตั้งร้านค้า</font></h2>
            <hr></hr>

            <div className = "container_4">
            <FormItem
              {...formItemLayout}
              label={<font><b>เลขที่</b></font>}
            >
              <Input placeholder="123/456" name = "no" value={form.no} onChange = {updateField} style = {formConfig}  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<font><b>ถนน</b></font>}
            >
              <Input placeholder="พหลโยธิน" name = "road" value={form.road} onChange = {updateField} style = {formConfig}  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<font><b>อำเภอ</b></font>}
            >
              <Input placeholder="ลาดพร้าว" name = "dis" value={form.dis} onChange = {updateField}style = {formConfig}   />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<font><b>จังหวัด</b></font>}
            >
              <Input placeholder="กรุงเทพ" name = "pro" value={form.pro} onChange = {updateField} style = {formConfig}  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<font><b>โทรศัพท์</b></font>}
            >
              <Input placeholder="000-0000000" name = "tel" value={form.tel} onChange = {updateField}style = {formConfig}   />
            </FormItem>

            </div>
           <h2> <font>Product Group</font></h2>
            <hr></hr>
            
            <div style ={{marginTop:"10px" , marginLeft:"7.5%"}}>
            <h4><b><font>ร้านต้นแบบ :</font></b></h4>
            </div>
            
            <div style ={{marginTop:"10px",marginBottom:"10px",display:'flex'}}>
            {
            proto.map(x => (
              <Button onClick = {() => addField(x)} style = {{marginLeft:'auto',marginRight:'auto',width:"210px",border:"3px solid",...formConfig}} >{<font>{x}</font>}</Button> 
              )
            )
            }
            </div>
            <div style ={{marginTop:"10px" , marginLeft:"5.7%"}}>
            <h4><font><b>จำนวนตัวเลือก :</b></font></h4>
            </div >
            <div style = {{marginTop:"10px",marginLeft:"10%"}}>
            <Button shape="circle"   onClick ={cat5} style = {{margin:"10px",border:"3px solid #654018" }}><font>5</font></Button > 
            <Button shape="circle"  onClick = {cat10} style = {{margin:"10px",border:"3px solid #654018"}} ><font>10</font></Button > 
            </div>
            <h2>ประเภทสินค้า</h2>

            <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <div style ={{display:"flex"}}>
                  {range(5).map((x,i) => 
                    (
                    <div style  ={{marginLeft:"auto",marginRight:'auto'}}>
                    <Input value={form.cat[x]} onChange ={e => updateArray(e,x)} style = {{border:"3px solid",width:"210px",...formConfig}}  />
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
                    <Input style = {{border:"3px solid",width:"210px",...formConfig}}  />
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
                  {<IntlMessages id="ตกลง" />}
            </Button>
            </div>

        </LayoutContent>
      </LayoutContentWrapper>
    );
  
}
export default Setting
