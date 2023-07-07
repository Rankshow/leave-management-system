import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { PlusCircleOutlined } from '@ant-design/icons';


function App() {
  
  return (
    <>
  <div className='mt-5'>
    <div>
      <h2 className='text-center'>Existing Department</h2>
          <section className='d-flex justify-content-between mx-3 align-items-center'>
          <h5 className='text-danger'>Department</h5>
          <PlusCircleOutlined className='text-primary'/>
          </section>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Procurement</th>
            <th>Accounting</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@facebook</td>
          </tr>
        </tbody>
      </Table>
</div>
      </div>
    </>
  )
}

export default App
