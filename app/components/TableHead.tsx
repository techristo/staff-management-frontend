'use client'


function TableHead(props:any) {

const data=[...props.data];
  return (<>
  <thead>
      <tr>
        {data?.map((row: any) => (
          <th key={row.id}>{row.text}</th>
))}
      </tr>
    </thead>
  </>
    
  );
}

export default TableHead;