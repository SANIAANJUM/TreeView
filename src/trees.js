import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import { TreeView } from '@material-ui/lab';
import TreeItem from '@material-ui/lab/TreeItem';




const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: 5,
	},

	
	

}));

export default function Trees() {
	const theme = useTheme();
	const classes = useStyles(theme);
	
	return (
		<div className={classes.root}>
		{/* AppBar part - Only contains a menu icon*/}
		<div  id="box"  >
    		<Box color="black" bgcolor="white" p={5}>
      			<h1 >Tree Mockup</h1>
    		</Box>
    	</div>
		{/*<div id="box" class="box-shadow">
		<Box color="black" bgcolor="white" p={1}>
      			Tree Mockup Second
    		</Box>
	</div>*/}
		
			{/* Drawer (can be placed anywhere in template) */}
			
				<List
				sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					<div>
					{/* Tree Structure */}
						<TreeView>
							<TreeItem nodeId="1" label={
								<ListItem button component="a" href="https://github.com/SANIAANJUM">
									<ListItemText class="a" primary="SANIAANJUM" />
								</ListItem>}>
							</TreeItem>
							<TreeItem nodeId="2" label={
								<ListItem button component="a" href="#">
									<ListItemText primary="Coding" />
								</ListItem>}>
								<TreeItem nodeId="6" label={
									<ListItem button component="a" href="https://github.com/SANIAANJUM/dynamicprogramming/blob/master/Sort%20an%20array%20of%200s%2C%201s%20and%202s">
										<ListItemText primary="Arrays" />
									</ListItem>}>
								</TreeItem>
								<TreeItem nodeId="7" label={
									<ListItem button component="a" href="https://github.com/SANIAANJUM/LINKED-LIST">
										<ListItemText primary="Linked List" />
									</ListItem>}>
								</TreeItem>
								<TreeItem nodeId="8" label={
									<ListItem button component="a" href="#">
										<ListItemText primary="Graphs" />
									</ListItem>}>
								</TreeItem>
								<TreeItem nodeId="9" label={
									<ListItem button component="a" href="https://github.com/SANIAANJUM/dynamicprogramming">
										<ListItemText primary="Dynamic Programming" />
									</ListItem>}>
								</TreeItem>
							</TreeItem>
							<TreeItem nodeId="3" label={
								<ListItem button component="a" href="#">
									<ListItemText primary="Algortihms" />
								</ListItem>}>
								<TreeItem nodeId="10" label={
									<ListItem button component="a" href="#">
										<ListItemText primary="Searching" />
									</ListItem>}>
								</TreeItem>
								<TreeItem nodeId="11" label={
									<ListItem button component="a" href="#">
										<ListItemText primary="Sorting" />
									</ListItem>}>
								</TreeItem>
							</TreeItem>
							<TreeItem nodeId="4" label={
								<ListItem button component="a" href="#">
									<ListItemText primary="Languages" />
								</ListItem>}>
								<TreeItem nodeId="12" label={
									<ListItem button component="a" href="https://github.com/SANIAANJUM/dynamicprogramming">
										<ListItemText primary="C++" />
									</ListItem>}>
								</TreeItem>
								<TreeItem nodeId="13" label={
									<ListItem button component="a" href="#">
										<ListItemText primary="Java" />
									</ListItem>}>
								</TreeItem>
								<TreeItem nodeId="14" label={
									<ListItem button component="a" href="https://github.com/SANIAANJUM/PREDICT-NUMBER">
										<ListItemText primary="Python" />
									</ListItem>}>
								</TreeItem>
								<TreeItem nodeId="15" label={
									<ListItem button component="a" href="https://github.com/SANIAANJUM/StubbBee">
										<ListItemText primary="JavaScript" />
									</ListItem>}>
								</TreeItem>
							</TreeItem>
							<TreeItem nodeId="5" label={
								<ListItem button component="a" href="#">
									<ListItemText primary="Project" />
								</ListItem>}>
								<TreeItem nodeId="16" label={
									<ListItem button component="a" href="#">
										<ListItemText primary="Python" />
									</ListItem>}>
									<TreeItem nodeId="18" label={
									<ListItem button component="a" href="https://github.com/SANIAANJUM/PREDICT-NUMBER">
										<ListItemText primary="Diabetic Retinopathy" />
									</ListItem>}>
								</TreeItem>
								</TreeItem>
								<TreeItem nodeId="17" label={
									<ListItem button component="a" href="#">
										<ListItemText primary="React js" />
									</ListItem>}>
									<TreeItem nodeId="19" label={
									<ListItem button component="a" href="https://github.com/SANIAANJUM/StubbBee">
										<ListItemText primary="Stubbee" />
									</ListItem>}>
								</TreeItem>
								<TreeItem nodeId="20" label={
									<ListItem button component="a" href="https://github.com/SANIAANJUM/react-complete-guide-final">
										<ListItemText primary="React Guide" secondary="A GIT repository mockup - fetching and displaying data." />
									</ListItem>}>
								</TreeItem>
								</TreeItem>
							</TreeItem>
						</TreeView>
					</div>
				</List>
			
			{/* End-Drawer */}
		</div>
	);
}
