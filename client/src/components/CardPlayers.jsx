import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PropTypes from 'prop-types';




const CardPlayer = (props) =>{
    
    return (
        <Card sx={{width: 280 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="160"
                        image={`data:image/png;base64,${props.player.player_img}`}
                        alt={props.player.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {props.player.name}
                          <p></p>
                          {props.player.lastName}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                        {props.player.team}
                        <p></p>
                        {props.player.role}
                        <p></p>
                        {props.player.jersey_num}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>  
    )
}
CardPlayer.propTypes = {
    player: PropTypes.shape({
        player_img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        jersey_num: PropTypes.number.isRequired,
    }).isRequired,
};
export default CardPlayer