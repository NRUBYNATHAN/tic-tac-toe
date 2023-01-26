export  function Game({ val,onPlayer }) {



    const styles = {
      color: val === "X" ? "green" : "red"
    };
    return (
      <div style={styles} onClick={onPlayer} className="board">
        {val}
        
      </div>
    );
  }