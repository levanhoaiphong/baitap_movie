import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
	return {
		root: {
			maxWidth: 250,
		},
		media: {
			height: 340,
		},
		title: {
			fontSize: 30,
			fontWeight: theme.typography.fontWeightBold
		}
	};
});

export default useStyle;
