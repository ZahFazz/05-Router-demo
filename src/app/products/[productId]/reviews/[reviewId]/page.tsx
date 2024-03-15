type Props = {
    params: {
          reviewId: string
    }
  }
  
  export default function BlogsDetails({ params }: Props) {
    return (
          <h1>test review for {params.reviewId}</h1>
    )
  }