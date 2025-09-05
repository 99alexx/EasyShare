# Workflow from idea to finished product

EasyShare - Share files between friends quick and easy

The birth of the idea: When I was in university we sometimes worked in group projects. One recurring problem was to quickly and easily share files between each other, specifically 20MB+ sized files. 
I had bought an Rasperry Pi 5, and did not know what to really use it for...
So why not use the Pi to host a server and to build a relatively simple website to share files on. The upside of doing it this way is for me to learn along the way how to set up a server on a Pi, full controll of the server and management. 

To actually learn as much as possible i've limited the use of GenAI as much as possible.
Rules for usage:
- For every prompt or thread, provided instuctions to NOT provide code examples.
- Pseudo code
- General discussions

# The development plan (Built with some help from Claude)

Phase 1: Basic Backend - Tools: NodeJS, Express, Multer
- Goal: Get file upload and download working
- Set up Express server
- Implement file upload endpoint
- Create temporary file storage on disk
- Build download endpoint with unique ID
- Test with tools like Postman/Thunder Client

Phase 2: Basic Frontend - Tools: React/Vite, Tailwind
- Goal: Simple interface for testing functionality
- Create upload form
- Show generated link after upload
- Create download page that accepts link/ID
- Basic CSS/styling

Phase 3: Link Management & Security
- Goal: Secure, unique links
- Generate cryptographically secure IDs
- Implement link validation
- Add basic security headers
- File size and file type validation

Phase 4: Automatic Deletion
- Goal: Files disappear after 10 min or upon download
- Timer-based deletion
- Deletion on download
- Regular cleanup job
- Database/file to track file status

Phase 5: User Experience
- Goal: Make it user-friendly
- Progress bars for upload/download
- Error handling and user messages
- Responsive design for mobile
- Loading states and feedback

Phase 6: Performance & Robustness
- Goal: Handle large files and multiple users
- Streaming for large files
- Rate limiting
- Proper error handling
- Memory management

Phase 7: Production & Deployment
- Goal: Go live on Raspberry Pi
- Domain setup and DNS
- SSL certificate
- Nginx reverse proxy
- Process management (PM2)
- Monitoring and logs
