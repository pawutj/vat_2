import React, { Component ,useState, useEffect} from "react";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";
import Form from '../../../components/uielements/form';
import IntlMessages from '../../../components/utility/intlMessages';
import Input ,{InputGroup}from '../../../components/uielements/input';
import Button, { ButtonGroup } from '../../../components/uielements/button';
import { Col, Row, Icon } from 'antd';
import { RadioGroup, RadioButton } from '../../../components/uielements/radio';
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};


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

  const proto = ['ของฝาก','เสื้อผ้า','เครื่องประดับ','ห้างสรรพสินค้า','ทั่วไป']
  const addField = (c) =>{
    console.log(c)
    let t = form.cat
    if(c=='ของฝาก'){
   
      t[0] = 'Royce'
      t[1] = 'Kit-Kat'
      t[2] = 'Pocky'
    }
    if(c=='เสื้อผ้า'){
      t[0] = 'เสื้อ'
      t[1] ='กางเกง'
      t[2] = 'เข็มขัด'
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

      

          <FormItem
              {...formItemLayout}
              label={<IntlMessages id="เลขประจำตัวผู้เสียภาษี" />}
            >
              <Input placeholder="Text1234567" name = "id" value={form.id} onChange = {updateField}  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="ชื่อร้านค้า" />}
            >
              <Input placeholder="Alethia" name = "name" value={form.name} onChange = {updateField}  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="เลขที่สาขา" />}
            >
              <Input placeholder="0" name = "subid" value={form.subid} onChange = {updateField}  />
            </FormItem>

            <h2>ที่ตั้งร้านค้า</h2>
            <hr></hr>
            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="เลขที่" />}
            >
              <Input placeholder="123/456" name = "no" value={form.no} onChange = {updateField}  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="ถนน" />}
            >
              <Input placeholder="พหลโยธิน" name = "road" value={form.road} onChange = {updateField}  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="อำเภอ" />}
            >
              <Input placeholder="ลาดพร้าว" name = "dis" value={form.dis} onChange = {updateField}  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="จังหวัด" />}
            >
              <Input placeholder="กรุงเทพ" name = "pro" value={form.pro} onChange = {updateField}  />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="โทรศัพท์" />}
            >
              <Input placeholder="000-0000000" name = "tel" value={form.tel} onChange = {updateField}  />
            </FormItem>
            <h2>Product Group</h2>
            <hr></hr>
            
            <h2>ร้านต้นแบบ</h2>
          
            {
            proto.map(x => (
              <RadioButton onClick = {() => addField(x)}>{x}</RadioButton> 
              )
            )
            }
          
            <h2>จำนวนตัวเลือก</h2>
          
            <RadioButton onClick ={cat5}>5</RadioButton> 
            <RadioButton onClick = {cat10}>10</RadioButton> 
         
            <h2>ประเภทสินค้า</h2>

            <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  
                  {range(form.cat.length).map(x => 
                  <Col span={4}>
                    <Input value={form.cat[x]} onChange ={e => updateArray(e,x)} />
                  </Col>
                  )
                  }
                </InputGroup>


            <br></br>
            <br></br>

            <Button onClick = {fecthData} >
                  {<IntlMessages id="ตกลง" />}
            </Button>


        </LayoutContent>
      </LayoutContentWrapper>
    );
  
}
export default Setting