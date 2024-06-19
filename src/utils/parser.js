export const formatText = (text) => {
  const sections = text.split("\n\n");

  const formattedData = sections.map((section) => {
    const [title, ...content] = section.split("\n");

    // Check if content contains a list (starts with "*")
    if (content.every((line) => line.startsWith("*"))) {
      return {
        title: removeAstrict(title), // Apply bold formatting to title
        content: content.map((item) => removeAstrict(item.slice(2))), // Remove leading asterisk and format bold
      };
    } else {
      // Content is a paragraph
      return {
        title: removeAstrict(title),
        content: [removeAstrict(content.join("\n"))],
      }; // Join content lines and format bold
    }
  });

  return formattedData;
};

const removeAstrict = (text) => {
  // Replace all occurrences of "**text**" with <b>text</b> for bold formatting
  return text.replace(/\*\*(.*?)\*\*/g, "").replace(/\#\#(.*?)/g, "");
};
