type Props = {
    params: {
          blogId: string
    }
  }
  
  export default function BlogsDetails({ params }: Props) {
    return (
          <h1>test blog {params.blogId}</h1>
    )
  }