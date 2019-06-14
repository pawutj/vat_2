import React ,{useState, useEffect} from 'react'
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";
import Form from '../../../components/uielements/form';
import Input ,{InputGroup}from '../../../components/uielements/input';
import IntlMessages from '../../../components/utility/intlMessages';
import Button, { ButtonGroup } from '../../../components/uielements/button';
import Table from '../../../components/uielements/table';
import * as TableViews from './tableViews/';
import { tableinfos } from './configs';
import "./style_1.css"
import { AutoComplete } from 'antd';
import "../style_all.css"
import Select, { SelectOption } from '../../../components/uielements/select';
import InputNumber from '../../../components/uielements/InputNumber'; 
const Option = SelectOption;

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7}
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};
const range = e => Array(e).fill(0).map((x,i) =>i)
const pro_cat_2 = ['Shirts','Trousers','Sneakers','Slingbacks','Leather Bag']
const pro_cat_1 = ['เสื้อ','กางเกง','รองเท้าหนัง','รองเท้าผ้าใบ','กระเป๋าผ้า']
const formConfig = {
  borderColor:"#654018"
}
const Pp10  = () => {
    const [form,setValues] = useState({
     name:'',
     passport:'',
     nation:'',
     vat:'',
     product:'',
     quantity:'',
     value:'',
     c:1

      })

      const [productList,setProduct] = useState({
        
        data:
        []
    
    })

    const [lang,_setLang] = useState(true)
  
  const setLang = () =>{
    _setLang(lang => !lang)
    console.log(lang)
  }

  
    useEffect(() => {
     
    })

    const productColumns = [
        {
        title:lang?"อันดับ":"No",
        dataIndex:'no',
        key:'no'
            
    },
    {
        title:lang?"เลขที่ใบกำกับภาษี":"Tax",
        dataIndex:'tax',
        key:'tax'
            
    },
    {
        title:lang?"รายการสินค้า":'Product',
        dataIndex:'product',
        key:'product'
            
    },
    {
        title:lang?"จำนวน":'Quantity',
        dataIndex:'quantity',
        key:'quantity'
            
    },
    {
        title:lang?"ราคา":'Value',
        dataIndex:'value',
        key:'value'
            
    },
    {
      title: lang?"ลบ":'Delete',
      dataIndex: '',
      key: 'd',
      render: (text, record) => (
        <a onClick={e =>onDelete(record.no,e)} href="#">
          <Button shape = "circle" size = "small" style = {formConfig}></Button>
        </a>
      ),
    }
        ]

    const onDelete = (key,e) =>{
   
      const data_t = productList.data.filter(c => c.no != key)
                                     .map((c,i) => {  let t = c
                                                      t.no=i+1
                                                      return t})
      setValues(e =>({
        ...form,
        c:e.c-1
      }))
      setProduct({data:data_t})
    }




    const updateCat =  e => {
        setValues({
            ...form,
            product:e=='etc'?'':e
        })
    }
      
    const updateField = e => {
     setValues({
        ...form,
        [e.target.name]:e.target.value
      })
     
    }

    const updateDrop = (v,e) =>{
      setValues({
        ...form,
        nation:v
      })
    }

    const addProduct = () => {
        let t = [...productList.data,{no:form.c,tax:form.vat,product:form.product,quantity:form.quantity,value:form.value}]
        let ct = form.c
        setProduct({
            data:t
        })
        setValues({
            ...form,
            c:ct+1,
            product:'',
            quantity:'',
            value:''
        })
    }
      

    
    return (
        <LayoutContentWrapper>
        <LayoutContent>
          <div className = "zoomC">
          <div style  = {{display:'flex',justifyContent:"center",width:'100%'}}>
      <div style = {{textAlign:'center',backgroundColor:"#654018" , width:"200px",marginBottom:"10px"}}>
      <h2 style = {{color:"white"}}>PP10 Application</h2>
      </div>
      </div>
       <h2><font><b>{lang?"สำหรับนักท่องเที่ยว":"For Tourist"}</b></font></h2><font><hr></hr></font>
       <div className = "container_1">
        <div className = "name">
        <FormItem
              {...formItemLayout}
              label={<b><font>{lang?"ชื่อนักท่องเที่ยว":"Name"}</font></b>}
            >
              <Input placeholder="Pawut Jingjit" name = "name" value={form.name} onChange = {updateField} style = {formConfig} className="font_kanit"  />
            </FormItem>
        </div>
        <div className = "emp_1"></div>
        <div className = "passport">
            <FormItem
              {...formItemLayout}
              label={<b><font>{lang?"เลขที่หนังสือเดินทาง":"Passport #"}</font></b>}
            >
              <Input placeholder="ABCDEF123" name = "passport" value={form.passport} onChange = {updateField} style = {formConfig} className="font_kanit"   />
            </FormItem>
            
            </div>
            <div className = "nationality">
            {/* <FormItem 
              {...formItemLayout} 
              label={<b><font>Natoinality</font></b>}
            >
              <Input placeholder="Th" name = "nation" value={form.nation} onChange = {updateField}  style = {formConfig} className="font_kanit" />
            </FormItem> */}

<FormItem 
  {...formItemLayout} 
  label={<b><font>{lang?"สัญชาติ":"Natoinality"}</font></b>}
>
                  <Select name = "nation" value = {form.nation}  placeholder="Thailand"  onSelect ={(v,e) => updateDrop(v,e)} style={{border:"solid 1px  #654018",width: '100%',borderRadius:'5px' }} {...formItemLayout} className ="font_kanit" label={<b><font>Natoinality</font></b>}>
                    <Option name = "nation"  value="Thailand"  style = {formConfig}>Thailand</Option>
                    <Option name = "nation" value="Japanese"  style = {formConfig}>Japanese</Option>
                  </Select>
                  </FormItem>

            </div>
            </div>
            <h2><font><b>For Product Item</b></font></h2><hr></hr>
            <div style ={{display:'flex',justifyContent:'flex-end',padding:'10px'}}>
              <a><p><font onClick = {setLang}><b>{lang?"Eng":"Th"}</b></font></p></a>
            </div>
            <div className ="container_2">
            <div className = "vat">
            <FormItem
              {...formItemLayout}
              label={<b><font>{lang?"เลขที่ใบกำกับภาษี":"Vat #"}</font></b>}
            >
              <Input placeholder="3131" name = "vat" value={form.vat} onChange = {updateField}  style = {formConfig} className="font_kanit"  />
            </FormItem>
            </div>
            <div className = "emp_2"></div>
            <div className = "pbox" style ={{display:"flex"}} >
            {lang?
              pro_cat_1.map( x =>(
              
                <Button className="font_kanit"  onClick ={() => updateCat(x) } style = {{marginLeft:'auto',marginRight:'auto',width:"210px",border:"3px solid",...formConfig}} >{<font>{x}</font>}</Button>
            )):
            pro_cat_2.map( x =>(
              
              <Button className="font_kanit"  onClick ={() => updateCat(x) } style = {{marginLeft:'auto',marginRight:'auto',width:"210px",border:"3px solid",...formConfig}} >{<font>{x}</font>}</Button>
          ))

          
            }
              <Button  className="font_kanit"  shape="circle" style={{marginLeft:'5px',...formConfig,border:"3px solid #654018"}}>+</Button> 
          </div>

          <div className = "product">
            <FormItem
              {...formItemLayout}
              label={<b><font>{lang?"รายการสินค้า":"Product"}</font></b>}
            >
              <Input className="font_kanit"  placeholder="Shirts" name = "product" value={form.product} onChange = {updateField} style = {formConfig} />
            </FormItem>
            </div>
            <div className = "quantity" >
            
            <FormItem
              {...formItemLayout}
              label={<b><font>{lang?"จำนวน":"Quantity"}</font></b>}
            >
              <Input className="font_kanit"  placeholder="1" name = "quantity" value={form.quantity} onChange = {updateField} style = {formConfig}  />
            </FormItem>
            </div>
            <div className = "value">
                
            <FormItem
              {...formItemLayout}
              label={<b><font>{lang?"ราคา":"Value"}</font></b>}
            >
              <Input className="font_kanit"  placeholder="3$" name = "value" value={form.value} onChange = {updateField}  style = {formConfig} />
            </FormItem>
            </div>
            <div className = "enter" >
            <Button className="font_kanit"  onClick = {addProduct} style = {{width:"200px",backgroundColor:"#ff7f26",height:"40px"}}><font style = {{fontSize:"18px"}}>{lang?"ตกลง":"Enter"}</font></Button>
            </div>
            </div>
            <div style = {{marginTop:"20px" }}>
            <Table className="font_kanit"  dataSource={productList.data} columns={productColumns} style = {{color:"#654018"}} />
            </div>
            </div>
    </LayoutContent>
    </LayoutContentWrapper>
        
    )
}

export default Pp10