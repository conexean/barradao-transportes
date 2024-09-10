interface TableUsersInterface {
  headers: string[];
  data: {
    id: number;
    fullname: string;
    email: string;
    username: string;
  }[];
  totalPages: number;
  page: number;
}

export default TableUsersInterface;
