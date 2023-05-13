


const BookingRow = ({ bookings, handleDelete, hanleConfirm }) => {

  const { title, img, date, price, _id, statue } = bookings;

  console.log(statue);

  return (

    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-24 rounded">
              {img && <img src={img} alt="" />}
            </div>
          </div>

        </div>
      </td>
      <td>
        <h3> {title && title}</h3>

      </td>
      <td>{date && date}</td>
      <td>{price && price}</td>
      <th>
        {
          statue == 'confirm' ? <span className="btn btn-ghost btn-xs text-primary"> Confirm </span> :

            <button onClick={() => hanleConfirm(_id)} className="btn btn-ghost btn-xs">Place Confirm </button>
        }
      </th>
    </tr>
  );
};

export default BookingRow;