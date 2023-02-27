import {
    Button,
    ButtonGroup,
} from "react-bootstrap";

const PostListItem = ({ data, deleteRacord }) => {
    const deleteHandler = (item) => {
      if(window.confirm(`Do you realy want to delete racord "${item.title}"?`)) {
        deleteRacord(item.id)
      }
    }


    const records = data.map((el, idx) => (
        <tr key={el.id}>
          <td>#{++idx}</td>
          <td>{el.title}</td>
          <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success">Edit</Button>
                <Button variant="danger" onClick={() => deleteHandler(el)}>Delete</Button>
              </ButtonGroup>
          </td>
        </tr>
    ))

  return (
    <>
        {records}
    </>
  )
}

export default PostListItem