const BasicCode = () => {
  const handleClick = () => {
    console.log(123)
  }

  return (
    <div>
      <Button ghost type="primary" onClick={handleClick}>
        huang
      </Button>
    </div>
  )
}
