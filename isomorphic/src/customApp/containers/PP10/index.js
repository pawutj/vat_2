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
import "./style.css"
import { AutoComplete } from 'antd';
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
const pro_cat = ['Shirts','Trousers','Sneakers','Slingbacks','Leather Bag','+']

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

    useEffect(() => {
     
    })

    const productColumns = [
        {
        title:'No',
        dataIndex:'no',
        key:'no'
            
    },
    {
        title:'Tax',
        dataIndex:'tax',
        key:'tax'
            
    },
    {
        title:'Product',
        dataIndex:'product',
        key:'product'
            
    },
    {
        title:'Quantity',
        dataIndex:'quantity',
        key:'quantity'
            
    },
    {
        title:'Value',
        dataIndex:'value',
        key:'value'
            
    },
    {
      title: '',
      dataIndex: '',
      key: 'd',
      render: (text, record) => (
        <a onClick={e =>onDelete(record.no,e)} href="#">
          Delete
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
       <h2>For Tourist</h2><hr></hr>
       <div className = "container_1">
        <div className = "name">
        <FormItem
              {...formItemLayout}
              label={<IntlMessages id="Name" />}
            >
              <Input placeholder="Pawut Jingjit" name = "name" value={form.name} onChange = {updateField}  />
            </FormItem>
        </div>
        <div className = "emp_1"></div>
        <div className = "passport">
            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="Passport" />}
            >
              <Input placeholder="ABCDEF123" name = "passport" value={form.passport} onChange = {updateField}  />
            </FormItem>
            
            </div>
            <div className = "nationality">
            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="Nationality" />}
            >
              <Input placeholder="Th" name = "nation" value={form.nation} onChange = {updateField}  />
            </FormItem>
            </div>
            </div>
            <h2>For Product Item</h2><hr></hr>
            
            <div className ="container_2">
            <div className = "vat">
            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="VAT" />}
            >
              <Input placeholder="3131" name = "vat" value={form.vat} onChange = {updateField}  />
            </FormItem>
            </div>
            <div className = "emp_2"></div>
            <div className = "pbox" style ={{display:"flex"}} >
            {pro_cat.map( x =>(
              
                <Button onClick ={() => updateCat(x) } style = {{marginLeft:'auto',marginRight:'auto',width:"150px"}} >{x}</Button>
                
            )

            )}
          </div>

          <div className = "product">
            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="Product" />}
            >
              <Input placeholder="Kit-Kat" name = "product" value={form.product} onChange = {updateField}  />
            </FormItem>
            </div>
            <div className = "quantity" >
            
            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="Quantity" />}
            >
              <Input placeholder="1" name = "quantity" value={form.quantity} onChange = {updateField}  />
            </FormItem>
            </div>
            <div className = "value">
                
            <FormItem
              {...formItemLayout}
              label={<IntlMessages id="Value" />}
            >
              <Input placeholder="3$" name = "value" value={form.value} onChange = {updateField}  />
            </FormItem>
            </div>
            <div className = "enter" >
            <Button onClick = {addProduct} style = {{width:"200px"}}>Enter</Button>
            </div>
            </div>
            <Table dataSource={productList.data} columns={productColumns} />
           

    </LayoutContent>
    </LayoutContentWrapper>
        
    )
}

export default Pp10